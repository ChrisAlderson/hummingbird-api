const HummingbirdAPI = require("../hummingbird-api");

// Depending on the version an api_key is needed.
// The default version is version 1.
let hummingbirdAPI = new HummingbirdAPI("4754a09739965e02660a", 2);

// Destructuring the possible object from the API wrapper.
const { Anime } = hummingbirdAPI;

// Get an anime by slug (can also be the id Hummingbird uses).
Anime.getAnime("log-horizon")
  .then(res => console.log(res))
  .catch(err => console.error(err));

// Get an anime by the MyAnimeList id.
Anime.getAnimeByMal("17265")
  .then(res => console.log(res))
  .catch(err => console.error(err));

/* Search is not supported in V2 (yet) */
// Anime.search("log-horizon")
//   .then(value => console.log(value))
//   .catch(err => console.error(err));
