import HummingbirdAPI from "../hummingbird-api";

const { Anime } = new HummingbirdAPI("api_key", 2);

Anime.getAnime("log-horizon")
  .then(value => console.log(value))
  .catch(err => console.error(err));

Anime.getAnimeByMal("17265")
  .then(value => console.log(value))
  .catch(err => console.error(err));

/* Search is not supported in V2 (yet) */
// Anime.search("log-horizon")
//   .then(value => console.log(value))
//   .catch(err => console.error(err));
