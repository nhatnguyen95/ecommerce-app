import {useAppNavigation} from 'navigation/RootNavigation';
import {moviesSlice} from 'store/slices/moviesSlice';
import {useAppDispatch} from 'store/store';

const useBooking = (movieId?: number) => {
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();
  const navigateToBookingScreen = (id: number) => {
    navigation.navigate('MovieDetailScreen', {id});
  };

  const handleBooking = () => {
    if (movieId) {
      dispatch(moviesSlice.actions.booking({id: movieId}));
      navigation.navigate('Booked');
    }
  };

  const cancelBooking = () => {
    if (movieId) {
      dispatch(moviesSlice.actions.cancelBooking({id: movieId}));
      navigation.navigate('Booked');
    }
  };

  return {navigateToBookingScreen, handleBooking, cancelBooking};
};

export default useBooking;
