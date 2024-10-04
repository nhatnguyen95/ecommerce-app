import {useCallback, useEffect} from 'react';
import {fetchMovies} from 'store/slices/moviesSlice';

import {useAppDispatch} from 'store/store';

const useFetchMovies = () => {
  const dispatch = useAppDispatch();

  const refetch = useCallback(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return {
    refetch,
  };
};

export default useFetchMovies;
