const chai = require('chai');
const assert = chai.assert;
const HummingbirdAPI = require("../../hummingbird-api");

describe("Anime V1", () => {

  let Anime;
  before(() => Anime = new HummingbirdAPI().Anime);

  it("Should get an anime based on the slug", done => {
    Anime.getAnime("log-horizon").then(res => {
        assert.isObject(res);
        done();
      }).catch(err => done(err));
  });

  it("Should search for an anime based on a query", done => {
    Anime.search("log-horizon").then(res => {
        assert.isArray(res);
        done();
      }).catch(err => done(err));
  });

});
