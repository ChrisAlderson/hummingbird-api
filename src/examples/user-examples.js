// Import the API wrapper.
import HummingbirdAPI from "../hummingbird-api";

// Destructuring the User object from the API wrapper.
const { User } = new HummingbirdAPI("api_key");

// authenticate a user. You can use username or email you don't have to fill in both.
// Either of those two are sufficient.
User.authenticate({username: "username", email: "email", password: "password"})
  .then(value => console.log(value))
  .catch(err => console.error(err));

// Get a user's info by its username.
User.getUser("username")
  .then(value => console.log(value))
  .catch(err => console.error(err));

// Get a user's feed by its username.
User.getUserFeed("username")
  .then(value => console.log(value))
  .catch(err => console.error(err));

// Get a user's favorites by its username.
User.getUserFavorites("username")
  .then(value => console.log(value))
  .catch(err => console.error(err));
