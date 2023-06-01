const BASE_URL = "https://api.tvmaze.com";

const getMovies = async (searchQuery) => {
  const response = await fetch(`${BASE_URL}${searchQuery}`);
  const body = await response.json();
  return body;
};

export const searchForShows = (query) => getMovies(`/search/shows?q=${query}`);
export const searchForPeople = (query) =>
  getMovies(`/search/people?q=${query}`);
