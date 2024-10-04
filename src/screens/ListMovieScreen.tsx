import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useAppSelector} from '../store/store';
import MovieTemplate from 'components/templates/MovieTemplate';
import useFetchMovies from 'hooks/queries/useFetchMovies';
import {useAppNavigation} from 'navigation/RootNavigation';
import {Movie} from 'types/movie';

const ListMovieScreen: React.FC = () => {
  const movies = useAppSelector(s => s.movies.movies);
  const moviesLoading = useAppSelector(s => s.movies.loading);
  const {refetch} = useFetchMovies();
  const navigaiton = useAppNavigation();

  const _handleBooking = (item: Movie) => {
    navigaiton.navigate('MovieDetailScreen', {id: item.id});
  };

  return (
    <SafeAreaView style={styles.container}>
      <MovieTemplate
        onBooking={_handleBooking}
        movies={movies}
        refreshing={moviesLoading}
        style={styles.content}
        refetch={refetch}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
  },
});

export default ListMovieScreen;
