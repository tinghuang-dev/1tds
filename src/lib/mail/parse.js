import header from './view/partials/header.ejs';
import footer from './view/partials/footer.ejs';
import layout from './view/partials/layout.ejs';
import logo from './view/partials/logo.ejs';

const { SITE_URL, PROTOCOL } = process.env;

const baseData = {
  SITE_URL,
  PROTOCOL,
};

const parse = (template, data) => layout({
  header: header({
    logo: logo(),
    ...baseData,
  }),
  footer: footer({
    ...baseData,
  }),
  content: template({
    ...baseData,
    ...data,
  }),
});

export default parse;
