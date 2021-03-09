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

export default { send };
