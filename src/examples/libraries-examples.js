// Import the API wrapper.
import HummingbirdAPI from "../hummingbird-api";

// Destructuring the Libraries and User object from the API wrapper.
const { Libraries, User } = new HummingbirdAPI("api_key");

// Get the library of someone by its username.
Libraries.getLibrary("username")
  .then(value => console.log(value))
  .catch(err => console.error(err));

// All the possible optional options to add or update a library
const optionalOptions = {
  status: "currently-watching",
  privacy: "public",
  rating: "4.5",
  sane_rating_update: "4.5",
  rewatching: false,
  rewatched_times: 0,
  notes: "Pretty awesome",
  episodes_watched: 3,
  increment_episodes: false
}

// To add, update or remove a library you need to be authenticated.
// This is also why we destructured the User object from the API wrapper.
User.authenticate({username: "username", email: "email", password: "password"})
  .then(auth_token => {
    Libraries.addLibrary(1234, auth_token, optionalOptions);
    Libraries.updateLibrary(1234, auth_token, optionalOptions);
    Libraries.removeLibrary(1234, auth_token);
  })
  .catch(err => console.error(err));
