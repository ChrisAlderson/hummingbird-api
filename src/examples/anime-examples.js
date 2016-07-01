// Import the API wrapper.
import HummingbirdAPI from "../hummingbird-api";

// Destructuring the Anime object from the API wrapper.
const { Anime } = new HummingbirdAPI("4754a09739965e02660a", 2);

// Get an anime by slug (can also be the id Hummingbird uses).
Anime.getAnime("log-horizon")
  .then(value => console.log(value))
  .catch(err => console.error(err));

// Get an anime by the MyAnimeList id.
Anime.getAnimeByMal("17265")
  .then(value => console.log(value))
  .catch(err => console.error(err));

/* Search is not supported in V2 (yet) */
// Anime.search("log-horizon")
//   .then(value => console.log(value))
//   .catch(err => console.error(err));
