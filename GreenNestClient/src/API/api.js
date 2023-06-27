import axios from "axios";

export const httpRequest = (data, url, json) => {
  return new Promise((resolve, reject) => {
    axios.post(window.$apiBaseUrl + url, data, {
      // headers: getAPI_Header()
      'Content-Type': 'application/json'
    }).then(function (response) {
      resolve(response.data);
    }).catch(function (error) {
      reject(error);
    });
  });
};
