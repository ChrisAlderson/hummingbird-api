const chai = require('chai');
const assert = chai.assert;
const HummingbirdAPI = require("../../hummingbird-api");

describe("Libraries V1", () => {

  let User;
  before(() => User = new HummingbirdAPI().User);

  // it("Should authenticate a user", done => {
  //   User.authenticate({username: "chrisalderson", email: "chris_alderson@hmamail.com", password: "supersecret"}).then(res => {
  //     assert.isString(res);
  //     done();
  //   }).catch(err => done(err));
  // });

  it("Should get information about a user", done => {
    User.getUser("chrisalderson").then(res => {
      assert.isObject(res);
      done();
    }).catch(err => done(err));
  });

  it("Should get the users feed", done => {
    User.getUserFeed("chrisalderson").then(res => {
      assert.isArray(res);
      done();
    }).catch(err => done(err));
  });

  it("Should get the users favorites", done => {
    User.getUserFavorites("chrisalderson").then(res => {
      assert.isArray(res);
      done();
    }).catch(err => done(err));
  });

});
