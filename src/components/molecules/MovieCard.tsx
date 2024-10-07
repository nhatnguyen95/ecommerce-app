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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface MovieCardProps extends ViewProps {
  movie: Movie;
  style?: StyleProp<ViewStyle>;
  onBooking?: (id: number) => void;
  onFavorite?: (id: number, value: boolean) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({
  movie,
  style,
  onBooking,
  onFavorite,
}) => {
  const _onPress = () => {
    onBooking?.(movie.id);
  };

  const _onPressFavorite = () => {
    onFavorite?.(movie.id, !movie.isFavorite);
  };

  return (
    <Card style={[CommonStyles.flexRow.default, styles.container, style]}>
      <Image source={{uri: movie.thumbnailUrl}} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text variant="titleMedium">{movie.name}</Text>
        <Text variant="bodyMedium">{movie.description}</Text>
        <Button style={styles.button} onPress={_onPress}>
          <Text>Manage booking</Text>
        </Button>
      </View>
      {onFavorite ? (
        <Icon
          onPress={_onPressFavorite}
          style={styles.icon}
          name={movie.isFavorite ? 'heart' : 'heart-outline'}
          size={24}
        />
      ) : null}
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
  },
  infoContainer: {
    marginHorizontal: 12,
    flex: 1,
  },
  image: {
    width: 80,
    height: 80,
  },
  button: {
    width: 140,
    padding: 0,
    marginTop: 8,
  },
  icon: {
    alignSelf: 'center',
  },
});

export default memo(MovieCard);
