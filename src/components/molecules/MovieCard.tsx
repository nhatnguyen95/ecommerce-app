import React, {memo} from 'react';

import Text from '../atoms/Text';
import Card from '../atoms/Card';

import {
  Image,
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import {Movie} from '../../types/movie';
import CommonStyles from 'configs/CommonStyles';
import Button from 'components/atoms/Button';

interface MovieCardProps extends ViewProps {
  movie: Movie;
  style?: StyleProp<ViewStyle>;
  onBooking: (item: Movie) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({movie, style, onBooking}) => {
  const _onPress = () => {
    onBooking(movie);
  };

  return (
    <Card style={[CommonStyles.flexRow.default, styles.container, style]}>
      <Image source={{uri: movie.thumbnailUrl}} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text variant="titleMedium">{movie.name}</Text>
        <Text variant="bodyMedium">{movie.description}</Text>
        <Button style={styles.button} onPress={_onPress}>
          <Text>Book</Text>
        </Button>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
  },
  infoContainer: {
    marginHorizontal: 12,
  },
  image: {
    width: 80,
    height: 80,
  },
  button: {
    width: 80,
    padding: 0,
    marginTop: 8,
  },
});

export default memo(MovieCard);
