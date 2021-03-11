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

export default { send, sendEmailVerification };
