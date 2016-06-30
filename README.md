# Hummingbird API

A NodeJS wrapper for the [Hummingbird](https://github.com/hummingbird-me/hummingbird) API V1. This wrapper needs an registered Hummingbird application key, you can register your application [here](https://hummingbird.me/apps/mine).

# Usage

This wrapper supports all V1 methods of the API, for documentation on the API checkout the [Hummingbird wiki](https://github.com/hummingbird-me/hummingbird/wiki/API-v1-Methods).

**Anime:**
```javascript
import HummingbirdAPI from "hummingbird-api";

const { Anime } = new HummingbirdAPI("api_key");

Anime.getAnime("log-horizon")
  .then(value => console.log(value))
  .catch(err => console.error(err));

Anime.search("log-horizon")
  .then(value => console.log(value))
  .catch(err => console.error(err));

```

**Libraries:**
```javascript
import HummingbirdAPI from "hummingbird-api";

const { Libraries, User } = new HummingbirdAPI("api_key");

Libraries.getLibrary("username")
  .then(value => console.log(value))
  .catch(err => console.error(err));

const optionalOptions = {
  status: "currently-watching",
  privacy: "public",
  rating: "4.5",
  sane_rating_update: "4.5",
  rewatching: false,
  rewatched_times: 0,
  notes: "Pretty awesome",
  episodes_watched: 3,
  increment_episodes: false
}

User.authenticate({username: "username", email: "email", password: "password"})
  .then(auth_token => {
    Libraries.addLibrary(1234, auth_token, optionalOptions);
    Libraries.updateLibrary(1234, auth_token, optionalOptions);
    Libraries.removeLibrary(1234, auth_token);
  })
  .catch(err => console.error(err));

```

**User:**
```javascript
import HummingbirdAPI from "hummingbird-api";

const { User } = new HummingbirdAPI("api_key");

User.authenticate({username: "username", email: "email", password: "password"})
  .then(value => console.log(value))
  .catch(err => console.error(err));

User.getUser("username")
  .then(value => console.log(value))
  .catch(err => console.error(err));

User.getUserFeed("username")
  .then(value => console.log(value))
  .catch(err => console.error(err));

User.getUserFavorites("username")
  .then(value => console.log(value))
  .catch(err => console.error(err));

```

# License

MIT License

Copyright (c) 2016 - Hummingbird API - Released under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
