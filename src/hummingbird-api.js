import Anime from "./anime";
import Helper from "./helper";
import Libraries from "./libraries";
import User from "./user";

module.exports = class HummingbirdAPI {

  constructor(api_key, version = 1) {
    if (!api_key) throw new Error("No API key given!");
    if (version !== 1 && version !== 2) throw new Error(`${version} is unsupported by this API. Only V1 and V2 are supported`);

    const helper = new Helper(api_key, version);

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
