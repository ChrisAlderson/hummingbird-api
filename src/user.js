
export default class User {

  constructor(helper) {
    this.helper = helper;
  };

  authenticate({ username, email, password }) {
    return this.helper.post("users/authenticate", { username, password });
  };

  getUser(username) {
    return this.helper.get(`users/${username}`);
  };

  getUserFeed(username) {
    return this.helper.get(`users/${username}/feed`);
  };

  getUserFavorites(username) {
    return this.helper.get(`users/${username}/favorite_anime`);
  };

};
