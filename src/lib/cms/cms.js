import { SiteClient } from 'datocms-client';

const OPTIONS = {
  environment: process.env.NEXT_PUBLIC_DATO_ENV,
};

const client = {
  fullAccess: new SiteClient(process.env.DATO_API_KEY, OPTIONS),
  readOnly: new SiteClient(process.env.NEXT_PUBLIC_DATO_API_KEY, OPTIONS),
};

export default client;
