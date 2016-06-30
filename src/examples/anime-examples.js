import HummingbirdAPI from "../hummingbird-api";

const { Anime } = new HummingbirdAPI("api_key");

Anime.getAnime("log-horizon")
  .then(value => console.log(value))
  .catch(err => console.error(err));

Anime.search("log-horizon")
  .then(value => console.log(value))
  .catch(err => console.error(err));
