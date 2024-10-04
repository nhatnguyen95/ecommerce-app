import movies from 'assets/movies.json';
import {delay} from 'utils/CommonUtils';

export const getMovieApi = async () => {
  await delay(500);
  return {
    data: movies,
  };
};
