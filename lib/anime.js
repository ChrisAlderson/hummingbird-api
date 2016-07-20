module.exports = class Anime {

  constructor(helper) {
    this.helper = helper;
  };

  getAnime(id) {
    return this.helper.get(`anime/${id}`);
  };

  getAnimeByMal(id) {
    return this.helper.get(`anime/myanimelist:${id}`);
  };

  search(query) {
    return this.helper.get("search/anime", { query });
  };

};
