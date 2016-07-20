# Hummingbird API

A NodeJS wrapper for the [Hummingbird](https://github.com/hummingbird-me/hummingbird) API V1 and V2. This wrapper needs an registered Hummingbird application key, you can register your application [here](https://hummingbird.me/apps/mine).

## Usage

#### Setup
```
npm install --save hummingbird-api
```

#### Initialize
```js
const HummingbirdAPI = require("hummingbird-api");

// Depending on the version an api_key is needed.
// The default version is version 1.
let hummingbirdAPI = new KAT([api_key, version, debug]);

// Destructuring the possible object from the API wrapper.
const { Anime, Libraries, User } = hummingbirdAPI;
```

#### Anime
```js
// Get an anime by slug (can also be the id Hummingbird uses).
Anime.getAnime("log-horizon")
  .then(res => console.log(res))
  .catch(err => console.error(err));

// Get an anime by the MyAnimeList id.
Anime.getAnimeByMal("17265")
  .then(res => console.log(res))
  .catch(err => console.error(err));

/* Search is not supported in V2 (yet) */
// Anime.search("log-horizon")
//   .then(value => console.log(value))
//   .catch(err => console.error(err));
```

#### Libraries
```js
// Get the library of someone by its username.
Libraries.getLibrary("chrisalderson")
  .then(res => console.log(res))
  .catch(err => console.error(err));

// All the possible optional options to add or update a library
const parameters = {
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

// To add, update or remove a library you need to be authenticated.
// This is also why we destructured the User object from the API wrapper.
User.authenticate({username: "chrisalderson", email: "chris_alderson@hmamail.com", password: "supersecret"})
  .then(auth_token => {

    Libraries.addLibrary({ id: "11437", auth_token, parameters })
      .then(res => console.log(res))
      .catch(err => console.error(err));

    Libraries.updateLibrary({ id: "11437", auth_token, parameters })
      .then(res => console.log(res))
      .catch(err => console.error(err));

    Libraries.removeLibrary(1234, auth_token)
      .then(res => console.log(res))
      .catch(err => console.error(err));

  }).catch(err => console.error(err));
```

#### User
```js
// Authenticate a user. You can use username or email you don't have to fill in both.
// Either of those two are sufficient.
User.authenticate({username: "chrisalderson", email: "chris_alderson@hmamail.com", password: "supersecret"})
  .then(res => console.log(res))
  .catch(err => console.error(err));

// Get a user's info by its username.
User.getUser("chrisalderson")
  .then(res => console.log(res))
  .catch(err => console.error(err));

// Get a user's feed by its username.
User.getUserFeed("chrisalderson")
  .then(res => console.log(res))
  .catch(err => console.error(err));

// Get a user's favorites by its username.
User.getUserFavorites("chrisalderson")
  .then(res => console.log(res))
  .catch(err => console.error(err));
```

# License

MIT License

Copyright (c) 2016 - hummingbird-api - Released under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
