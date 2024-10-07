import {useFocusEffect} from '@react-navigation/native';
import Button from 'components/atoms/Button';
import Container from 'components/atoms/Container';
import Text from 'components/atoms/Text';
import CommonStyles from 'configs/CommonStyles';
import useBooking from 'hooks/useBooking';
import {useAppNavigation, useAppRoute} from 'navigation/RootNavigation';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import {useAppSelector} from 'store/store';

const MovieDetailScreen: React.FC = () => {
  const route = useAppRoute();
  const navigation = useAppNavigation();

  useFocusEffect(() => {
    navigation.setOptions({headerShown: true, title: 'Movie detail'});
  });

  const dimensions = useWindowDimensions();
  const id = route.params?.id ?? -1;
  const movieDetail = useAppSelector(s =>
    s.movies.movies.find(i => i.id === id),
  );
  const isBooking = useAppSelector(s =>
    s.movies.bookedMovies.includes(movieDetail?.id ?? -1),
  );
  const {cancelBooking, handleBooking} = useBooking(movieDetail?.id);

  return (
    <Container>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Image
          source={{uri: movieDetail?.imageUrl}}
          style={[styles.banner, {width: dimensions.width}]}
          resizeMode="cover"
        />
        <View style={styles.content}>
          <Text style={CommonStyles.text.text18Bold}>{movieDetail?.name}</Text>
          <Text style={CommonStyles.text.text14}>
            {movieDetail?.description}
          </Text>
        </View>
      </ScrollView>
      <Button
        style={styles.button}
        onPress={isBooking ? cancelBooking : handleBooking}>
        <Text>{isBooking ? 'Booked' : 'Book now'}</Text>
      </Button>
    </Container>
  );
};

const styles = StyleSheet.create({
  banner: {height: 200},
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 12,
  },
  button: {
    marginHorizontal: 12,
  },
});

export default MovieDetailScreen;
