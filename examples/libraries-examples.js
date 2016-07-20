const HummingbirdAPI = require("../hummingbird-api");

// Depending on the version an api_key is needed.
// The default version is version 1.
let hummingbirdAPI = new HummingbirdAPI();

// Destructuring the possible object from the API wrapper.
const { Libraries, User } = hummingbirdAPI;

// Get the library of someone by its username.
Libraries.getLibrary("chrisalderson")
  .then(res => console.log(res))
  .catch(err => console.error(err));

// All the possible optional options to add or update a library
const parameters = {
  status: "currently-watching",
  privacy: "public",
  rating: "4.5",
  sane_rating_update: "4.5",
  rewatching: false,
  rewatched_times: 0,
  notes: "Pretty awesome",
  episodes_watched: 3,
  increment_episodes: false
};

// To add, update or remove a library you need to be authenticated.
// This is also why we destructured the User object from the API wrapper.
User.authenticate({username: "chrisalderson", email: "chris_alderson@hmamail.com", password: "supersecret"})
  .then(auth_token => {

    Libraries.addLibrary({ id: "11437", auth_token, parameters })
      .then(res => console.log(res))
      .catch(err => console.error(err));

    Libraries.updateLibrary({ id: "11437", auth_token, parameters })
      .then(res => console.log(res))
      .catch(err => console.error(err));

    Libraries.removeLibrary(1234, auth_token)
      .then(res => console.log(res))
      .catch(err => console.error(err));

  }).catch(err => console.error(err));
