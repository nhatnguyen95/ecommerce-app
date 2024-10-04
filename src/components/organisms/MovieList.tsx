import React from 'react';
import {Movie} from '../../types/movie';
import {StyleSheet} from 'react-native';
import {Divider} from 'react-native-paper';
import MovieCard from 'components/molecules/MovieCard';
import {FlashList} from '@shopify/flash-list';

interface MovileListProps {
  movies: Movie[];
  refreshing: boolean;
  onRefresh: () => void;
  onBooking: (item: Movie) => void;
}

const MovieList: React.FC<MovileListProps> = ({
  movies,
  refreshing,
  onRefresh,
  onBooking,
}) => {
  const _renderItem = ({item}: {item: Movie}) => {
    return <MovieCard style={styles.item} movie={item} onBooking={onBooking} />;
  };

  return (
    <FlashList
      data={movies}
      renderItem={_renderItem}
      keyExtractor={item => `i-${item.id}`}
      ItemSeparatorComponent={Divider}
      estimatedItemSize={1000}
      removeClippedSubviews={true}
      refreshing={refreshing}
      onRefresh={onRefresh}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    paddingVertical: 8,
  },
});

export default MovieList;
