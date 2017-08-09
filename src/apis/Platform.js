import { platform } from '../utils/settings';

const jsonToQueryString = json => {
  return '?' +
        Object.keys(json).map(function(key) {
          return encodeURIComponent(key) + '=' +
              encodeURIComponent(json[key]);
        }).join('&');
}

const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    let error = new Error(response.statusText);
    error.statusCode = response.status;
    error.response = response;
    throw error;
  }
}

const PlatformAPI = authToken => {
    
}

