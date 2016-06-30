
export default class Anime {

  constructor(helper) {
    this.helper = helper;
  };

  getAnime(id) {
    return this.helper.get(`anime/${id}`);
  };

  search(query) {
    return this.helper.get("search/anime", { query });
  };

};
