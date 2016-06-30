import HummingbirdAPI from "../hummingbird-api";

const { User } = new HummingbirdAPI("api_key");

User.authenticate({username: "username", email: "email", password: "password"})
  .then(value => console.log(value))
  .catch(err => console.error(err));

User.getUser("username")
  .then(value => console.log(value))
  .catch(err => console.error(err));

User.getUserFeed("username")
  .then(value => console.log(value))
  .catch(err => console.error(err));

User.getUserFavorites("username")
  .then(value => console.log(value))
  .catch(err => console.error(err));
