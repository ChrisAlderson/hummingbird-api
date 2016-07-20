const Anime = require("./lib/anime");
const Helper = require("./lib/helper");
const Libraries = require("./lib/libraries");
const User = require("./lib/user");

module.exports = class HummingbirdAPI {

  constructor(api_key, version = 1, debug = false) {
    if (!api_key && api_key === 2) throw new Error("No API key given!");
    if (version !== 1 && version !== 2) throw new Error(`${version} is unsupported by this API. Only V1 and V2 are supported`);

    const helper = new Helper(api_key, version, debug);

    this.Anime = new Anime(helper);
    if (version === 1) {
      this.Libraries = new Libraries(helper);
      this.User = new User(helper);
      this.Anime.getAnimeByMal = undefined;
    } else if (version === 2) {
      this.Anime.search = undefined;
    }
  };

};
