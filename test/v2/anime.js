const chai = require('chai');
const assert = chai.assert;
const HummingbirdAPI = require("../../hummingbird-api");

describe("Anime V2", () => {

  let Anime;
  before(() => Anime = new HummingbirdAPI({api_key: "4754a09739965e02660a", version: 2}).Anime);

  it("Should get an anime based on the slug", done => {
    Anime.getAnime("log-horizon").then(res => {
      assert.isObject(res);
      done();
    }).catch(err => done(err));
  });

  it("Should get an anime based on the mal-id", done => {
    Anime.getAnimeByMal("28977").then(res => {
      assert.isObject(res);
      done();
    }).catch(err => done(err));
  });

});
