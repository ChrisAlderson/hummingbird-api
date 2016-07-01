import req from "request";

export default class Helper {

  constructor(api_key, version) {
    const options = {
      "headers": {"X-Client-Id": api_key},
      "baseUrl": `https://hummingbird.me/api/v${version}/`
    };
    this.request = req.defaults(options);
  };

  get(uri, qs, retry = true) {
    return new Promise((resolve, reject) => {
      this.request.get({ uri, qs }, (err, res, body) => {
        if (err && retry) {
          return resolve(this.get(uri, qs, false));
        } else if (err) {
          return reject(err);
        } else if (!body || res.statusCode >= 400) {
          return reject(new Error(`No data found, statusCode: ${res.statusCode}`));
        } else {
          return resolve(JSON.parse(body));
        }
      });
    });
  };

  post(uri, qs, retry = true) {
    return new Promise((resolve, reject) => {
      this.request.post({ uri, qs }, (err, res, body) => {
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
