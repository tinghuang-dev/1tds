import sgMail from '@sendgrid/mail';

const {
  SENDGRID_API_KEY,
  SENDGRID_EMAIL_FROM,
} = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const send = (params) => sgMail.send({
  ...params,
  from: SENDGRID_EMAIL_FROM,
});

const sendEmailVerification = (to, token) => send({
  to,
  subject: '[一团袋鼠]请验证你的邮箱',
  text: '请点击链接验证您的邮箱',
  html: `<a style="color: black;" href="http://localhost:3000/api/auth/verify-email?token=${token}">请点击链接验证您的邮箱</a>`,
});

export default { send, sendEmailVerification };
