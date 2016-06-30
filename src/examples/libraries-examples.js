import HummingbirdAPI from "../hummingbird-api";

const { Libraries, User } = new HummingbirdAPI("api_key");

Libraries.getLibrary("username")
  .then(value => console.log(value))
  .catch(err => console.error(err));

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
};

User.authenticate({username: "username", email: "email", password: "password"})
  .then(auth_token => {
    Libraries.addLibrary(1234, auth_token, optionalOptions);
    Libraries.updateLibrary(1234, auth_token, optionalOptions);
    Libraries.removeLibrary(1234, auth_token);
  })
  .catch(err => console.error(err));
