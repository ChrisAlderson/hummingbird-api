import request from "request";

export default class Helper {

  constructor(api_key, version) {
    this.api_key = api_key;
    this.version = version;
  };

  get(uri, qs, retry = true) {
    return new Promise((resolve, reject) => {
      uri = `https://hummingbird.me/api/v${this.version}/${uri}`;
      console.log(uri);
      request({ method: "GET", headers: {
        "X-Client-Id": this.api_key
      }, uri, qs }, (err, res, body) => {
        console.log(res.statusCode);
        if (err && retry) {
          return resolve(this.get(uri, qs, false));
        } else if (err) {
          return reject(err);
        } else if (!body || res.statusCode >= 400) {
          return reject(new Error("No data found"));
        } else {
          return resolve(JSON.parse(body));
        }
      });
    });
  };

  post(uri, qs, retry = true) {
    return new Promise((resolve, reject) => {
      uri = `https://hummingbird.me/api/v${this.version}/${uri}`;
      request({ method: "POST", headers: {
        "X-Client-Id": this.api_key
      }, uri, qs }, (err, res, body) => {
        if (err && retry) {
          return resolve(this.get(uri, qs, false));
        } else if (err) {
          return reject(err);
        } else if (!body || res.statusCode >= 400) {
          return reject(new Error(`No data found; statuscode is: ${res.statusCode}`));
        } else {
          return resolve(JSON.parse(body));
        }
      });
    });
  };

};
