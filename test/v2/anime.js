const chai = require('chai');
const assert = chai.assert;
const HummingbirdAPI = require("../../hummingbird-api");

describe("Anime V2", () => {

  let Anime;
  before(() => Anime = new HummingbirdAPI("4754a09739965e02660a", 2).Anime);

  it("Should get an anime based on the slug", done => {
    Anime.getAnime("log-horizon").then(res => {
        assert.isObject(res);
        done();
      }).catch(err => done(err));
  });

  it("Should get an anime based on the mal-id", done => {
    Anime.getAnimeByMal("17265").then(res => {
        assert.isObject(res);
        done();
      }).catch(err => done(err));
  });

});
