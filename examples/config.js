require('dotenv').config({
  path: __dirname + '/.env'
});

var config = {
  API_KEY: process.env.API_KEY || '',
  API_SECRET: process.env.API_SECRET || '',
  SIGNATURE_SECRET: process.env.SIGNATURE_SECRET || '',
  NEW_API_SECRET: process.env.NEW_API_SECRET || '',
  API_SECRET_ID: process.env.API_SECRET_ID || '',
  FROM_NUMBER: process.env.FROM_NUMBER || '',
  ALT_TO_NUMBER: process.env.ALT_TO_NUMBER || '',
  TO_NUMBER: process.env.TO_NUMBER || '',
  NEXMO_COUNTRY_CODE: process.env.NEXMO_COUNTRY_CODE || '',
  NEXMO_NUMBER: process.env.NEXMO_NUMBER || '',
  TO_US_NUMBER: process.env.TO_US_NUMBER || '',
  MEDIA_ID: process.env.MEDIA_ID || '',
  BRAND_NAME: process.env.BRAND_NAME || '',
  REQUEST_ID: process.env.REQUEST_ID || '',
  WORKFLOW_ID: process.env.WORKFLOW_ID || '',
  CODE: process.env.CODE || '',
  APP_ID: process.env.APP_ID || '',
  PRIVATE_KEY: process.env.PRIVATE_KEY || '',
  DEBUG: process.env.DEBUG === 'true',
  REST_HOST: process.env.REST_HOST || 'rest.nexmo.com',
  API_HOST: process.env.API_HOST || 'api.nexmo.com'
};

module.exports = config;
