import req from "request";

export default class Helper {

  constructor(options) {
    this.request = req.defaults({ options });
  };

  get(uri, qs, retry = true) {
    return new Promise((resolve, reject) => {
      uri = `https://hummingbird.me/api/v1/${uri}`;
      this.request({ method: "GET", uri, qs }, (err, res, body) => {
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
      uri = `https://hummingbird.me/api/v1/${uri}`;
      this.request({ method: "POST", uri, qs }, (err, res, body) => {
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
