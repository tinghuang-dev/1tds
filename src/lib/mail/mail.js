import sgMail from '@sendgrid/mail';
import parse from './parse';
import emailVerification from './view/emailVerification.ejs';

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

const sendResetPassword = (to, token) => send({
  to,
  subject: '[一团袋鼠]请确认你的邮箱',
  text: '请点击重设你的密码',
  html: `<a style="color: black;" href="http://localhost:3000/api/auth/reset-password?token=${token}">请点击链接重设你的密码</a>`,
});

export default { send, sendEmailVerification, sendResetPassword };
