const req = require("request");

module.exports = class Helper {

  constructor(api_key, version, debug) {
    this.request = req.defaults({
      "headers": {
        "X-Client-Id": api_key
      },
      "baseUrl": `https://hummingbird.me/api/v${version}/`
    });
    this.debug = debug;
  };

  get(uri, qs, retry = true) {
    if (this.debug) console.warn(`Making request to: ${uri}.`);
    return new Promise((resolve, reject) => {
      this.request.get({ uri, qs }, (err, res, body) => {
        if (err && retry) {
          if (this.debug) console.warn(`${err.code} trying again.`);
          return resolve(this.get(uri, qs, false));
        } else if (err) {
          return reject(err);
        } else if (!body || res.statusCode >= 400) {
          return reject(new Error(`No data found with url: ${uri}, statusCode: ${res.statusCode}`));
        } else {
          return resolve(JSON.parse(body));
        }
      });
    });
  };

  post(uri, qs, retry = true) {
    if (this.debug) console.warn(`Making request to: ${uri}.`);
    return new Promise((resolve, reject) => {
      this.request.post({ uri, qs }, (err, res, body) => {
        if (err && retry) {
          if (this.debug) console.warn(`${err.code} trying again.`);
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
