import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import {Movie} from '../../types/movie';
import MovieList from 'components/organisms/MovieList';

interface MovieTemplateProps extends ViewProps {
  movies: Movie[];
  refetch: () => void;
  refreshing: boolean;
  onBooking: (item: Movie) => void;
}

const MovieTemplate: React.FC<MovieTemplateProps> = ({
  movies,
  refetch,
  refreshing,
  onBooking,
  ...props
}) => {
  return (
    <View {...props} style={[styles.container, props.style]}>
      <MovieList
        movies={movies}
        onRefresh={refetch}
        refreshing={refreshing}
        onBooking={onBooking}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
  },
  addProductComponent: {
    marginTop: 16,
  },
});

export default MovieTemplate;
