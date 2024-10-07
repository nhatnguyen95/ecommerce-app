import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import {Movie} from '../../types/movie';
import MovieList from 'components/organisms/MovieList';

interface MovieTemplateProps extends ViewProps {
  movies: Movie[];
  refetch?: () => void;
  refreshing?: boolean;
  onBooking?: (id: number) => void;
  onFavorite?: (id: number, value: boolean) => void;
}

const MovieTemplate: React.FC<MovieTemplateProps> = ({
  movies,
  refetch = () => {},
  refreshing,
  onBooking,
  onFavorite,
  ...props
}) => {
  return (
    <View {...props} style={[styles.container, props.style]}>
      <MovieList
        movies={movies}
        onRefresh={refetch}
        refreshing={refreshing ?? false}
        onBooking={onBooking}
        onFavorite={onFavorite}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    flex: 1,
  },
  addProductComponent: {
    marginTop: 16,
  },
});

export default MovieTemplate;
