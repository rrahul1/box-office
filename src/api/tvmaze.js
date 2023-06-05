const BASE_URL = "https://api.tvmaze.com";

const getMovies = async (searchQuery) => {
  const response = await fetch(`${BASE_URL}${searchQuery}`);
  const body = await response.json();
  return body;
};

export const searchForShows = (query) => getMovies(`/search/shows?q=${query}`);
export const searchForPeople = (query) =>
  getMovies(`/search/people?q=${query}`);

export const getShowById = (showId) =>
  getMovies(`/shows/${showId}?embed[]=seasons&embed[]=cast`);

export const getShowsByIds = async (showIds) => {
  const apiRequest = showIds.map((showId) => getMovies(`/shows/${showId}`));
  return Promise.all(apiRequest);
};
