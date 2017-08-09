// let CLOUD_VMS_HOST_NAME = 'https://cloudvms.solinkcloud.com';
let AUTH0_CLIENT_ID = '5R9iDKiQ7nYCGOJaBDrPbesMwnkGj7ih';
let AUTH0_DOMAIN = 'solink.auth0.com';
let PLATFORM = 'https://api.solinkcloud.com';

if (process.env.REACT_APP_NODE_ENV === 'integration') {
  // CLOUD_VMS_HOST_NAME = 'https://int-cloudvms.solinkcloud.com';
  AUTH0_CLIENT_ID = 'apgeIHLz2aSl1PyHUET1jpy3VCL4HAEe';
  AUTH0_DOMAIN = 'solink-test.auth0.com';
  PLATFORM = 'https://test-api.solinkcloud.com';
}

export default Object.assign({}, {
  // cloud_vms_host: CLOUD_VMS_HOST_NAME,
  auth0_clientID: AUTH0_CLIENT_ID,
  auth0_domain: AUTH0_DOMAIN,
  platform: PLATFORM,
});