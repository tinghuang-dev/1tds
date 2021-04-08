import sgMail from '@sendgrid/mail';
import inviteMember from './view/inviteMember.ejs';
import parse from './parse';
import emailVerification from './view/emailVerification.ejs';
import resetPassword from './view/resetPassword.ejs';

const {
  SENDGRID_API_KEY,
  SENDGRID_EMAIL_FROM,
} = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const send = (params) => sgMail.send({
  ...params,
  from: SENDGRID_EMAIL_FROM,
});

const sendEmailVerification = async (to, token) => {
  const html = parse(emailVerification, { token });

  return send({
    to,
    subject: '[一团袋鼠]请验证你的邮箱',
    text: '请点击链接验证您的邮箱',
    html,
  });
};

const sendResetPassword = async (to, token) => {
  const html = parse(resetPassword, { token });

  return send({
    to,
    subject: '[一团袋鼠]请确认你的邮箱',
    text: '请点击重设你的密码',
    html,
  });
};

const sendInviteMember = async (to, token) => {
  const html = parse(inviteMember, { token });

  return send({
    to,
    subject: '[一团袋鼠]邀请您参与团购',
    text: '请点击链接激活您的账户',
    html,
  });
};

export default {
  send, sendEmailVerification, sendResetPassword, sendInviteMember,
};
