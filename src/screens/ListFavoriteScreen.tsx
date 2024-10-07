import Container from 'components/atoms/Container';
import MovieTemplate from 'components/templates/MovieTemplate';
import useBooking from 'hooks/useBooking';
import React from 'react';
import {selectFavoriteMovies} from 'store/slices/moviesSlice';
import {useAppSelector} from 'store/store';

const ListFavoriteScreen: React.FC = () => {
  const favoriteMovies = useAppSelector(selectFavoriteMovies);
  const {navigateToBookingScreen} = useBooking();

  return (
    <Container>
      <MovieTemplate
        movies={favoriteMovies}
        onBooking={navigateToBookingScreen}
      />
    </Container>
  );
};

export default ListFavoriteScreen;
