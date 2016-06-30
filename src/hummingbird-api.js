import Anime from "./anime";
import Helper from "./helper";
import Libraries from "./libraries";
import User from "./user";

export default class HummingbirdAPI {

  constructor(api_key) {
    if (!api_key) throw new Error("No API key given!");

    const helper = new Helper({
      headers: {"X-Client-Id": api_key},
      followAllRedirects: true
    });

    this.Anime = new Anime(helper);
    this.Libraries = new Libraries(helper);
    this.User = new User(helper);
  };

};
