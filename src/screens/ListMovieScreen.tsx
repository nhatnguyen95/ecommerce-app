import React from 'react';
import {useAppSelector} from '../store/store';
import MovieTemplate from 'components/templates/MovieTemplate';
import useFetchMovies from 'hooks/queries/useFetchMovies';
import useBooking from 'hooks/useBooking';
import Container from 'components/atoms/Container';
import {selectMovies} from 'store/slices/moviesSlice';
import useFavorite from 'hooks/useFavorite';

const ListMovieScreen: React.FC = () => {
  const movies = useAppSelector(selectMovies);
  const moviesLoading = useAppSelector(s => s.movies.loading);
  const {refetch} = useFetchMovies();
  const {navigateToBookingScreen} = useBooking();
  const {handleFavorite} = useFavorite();

  return (
    <Container>
      <MovieTemplate
        onBooking={navigateToBookingScreen}
        movies={movies}
        refreshing={moviesLoading}
        refetch={refetch}
        onFavorite={handleFavorite}
      />
    </Container>
  );
};

export default ListMovieScreen;
