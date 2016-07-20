const chai = require('chai');
const assert = chai.assert;
const HummingbirdAPI = require("../../hummingbird-api");

describe("Libraries V1", () => {

  let Libraries, User, parameters, auth_token;
  before(done => {
    Libraries = new HummingbirdAPI().Libraries;
    User = new HummingbirdAPI().User;
    parameters = {
      status: "currently-watching",
      privacy: "public",
      rating: "4.5",
      sane_rating_update: "4.5",
      rewatching: false,
      rewatched_times: 0,
      notes: "Pretty awesome",
      episodes_watched: 3,
      increment_episodes: false
    };

    // User.authenticate({username: "chrisalderson", email: "chris_alderson@hmamail.com", password: "supersecret"}).then(auth => {
    //     auth_token = auth;
    //     done();
    //   }).catch(err => done(err));

    done();
  });

  it("Should get a list of animes in the library of the user", done => {
    Libraries.getLibrary("chrisalderson").then(res => {
      assert.isArray(res);
      done();
    }).catch(err => done(err));
  });

  // it("Should add an anime to the users library", done => {
  //   Libraries.updateLibrary({ id: "11437", auth_token, parameters }).then(res => {
  //     assert.isObject(res);
  //     done();
  //   }).catch(err => done(err));
  // });
  //
  // it("Should update an anime in the users library", done => {
  //   Libraries.updateLibrary({ id: "11437", auth_token, parameters }).then(res => {
  //     assert.isObject(res);
  //     done();
  //   }).catch(err => done(err));
  // });
  //
  // it("Should remove an anime in the users library", done => {
  //   Libraries.removeLibrary("11437", auth_token).then(res => {
  //     assert.isTrue(res);
  //     done();
  //   }).catch(err => done(err));
  // });

});
