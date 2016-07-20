const HummingbirdAPI = require("../hummingbird-api");

// Depending on the version an api_key is needed.
// The default version is version 1.
let hummingbirdAPI = new HummingbirdAPI();

// Destructuring the possible object from the API wrapper.
const { User } = hummingbirdAPI;

// Authenticate a user. You can use username or email you don't have to fill in both.
// Either of those two are sufficient.
User.authenticate({username: "chrisalderson", email: "chris_alderson@hmamail.com", password: "supersecret"})
  .then(res => console.log(res))
  .catch(err => console.error(err));

// Get a user's info by its username.
User.getUser("chrisalderson")
  .then(res => console.log(res))
  .catch(err => console.error(err));

// Get a user's feed by its username.
User.getUserFeed("chrisalderson")
  .then(res => console.log(res))
  .catch(err => console.error(err));

// Get a user's favorites by its username.
User.getUserFavorites("chrisalderson")
  .then(res => console.log(res))
  .catch(err => console.error(err));
