module.exports = class Libraries {

  constructor(helper) {
    this.helper = helper;

    this.statusValues = {
      "currently-watching": "currently-watching",
      "plan-to-watch": "plan-to-watch",
      "completed": "completed",
      "on-hold": "on-hold",
      "dropped": "dropped"
    };

    this.privacyValues = {
      "private": "private",
      "public": "public"
    };

    this.ratingValues = {
      "0": "0", "0.5": "0.5",
      "1.0": "1.0", "1.5": "1.5",
      "2.0": "2.0", "2.5": "2.5",
      "3.0": "3.0", "3.5": "3.5",
      "4.0": "4.0", "4.5": "4.5",
      "5.0": "5.0"
    };

    this.booleanValues = {
      "true": "true", "false": "false"
    };
  };

  getLibrary(username) {
    return this.helper.get(`users/${username}/library`);
  };

  addLibrary({ id, auth_token, parameters }) {
    const { status, privacy, rating, sane_rating_update, rewatching, rewatched_times, notes, episodes_watched, increment_episodes } = parameters;
    if (status && !this.statusValues[status]) throw new Error(`${status} is not a valid status value!`);
    if (privacy && !this.privacyValues[privacy]) throw new Error(`${privacy} is not a valid privacy value!`);
    if (rating && !this.ratingValues[rating]) throw new Error(`${rating} is not a valid value for rating!`);
    if (sane_rating_update && !this.ratingValues[sane_rating_update]) throw new Error(`${sane_rating_update} is not a valid value for sane_rating_update!`);
    if (rewatching && !this.booleanValues[rewatching]) throw new Error(`${rewatching} is not a valid value for rewatching!`);
    if (rewatched_times && typeof(rewatched_times) !== "number") throw new Error(`${rewatched_times} is not a valid value for rewatched_times!`);
    if (episodes_watched && typeof(episodes_watched) !== "number") throw new Error(`${episodes_watched} is not a valid value for episodes_watched!`);
    if (increment_episodes && !this.booleanValues[increment_episodes]) throw new Error(`${increment_episodes} is not a valid value for increment_episodes!`);

    return this.helper.post(`libraries/${id}`, { auth_token, status, privacy, rating, sane_rating_update, rewatching, rewatched_times, notes, episodes_watched, increment_episodes })
  };

  updateLibrary({ id, auth_token, parameters }) {
    return this.addLibrary({ id, auth_token, parameters });
  };

  removeLibrary(id, auth_token) {
    return this.helper.post(`libraries/${id}/remove`, { auth_token });
  };

};
