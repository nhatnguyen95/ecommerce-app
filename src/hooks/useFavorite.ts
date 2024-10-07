import {moviesSlice} from 'store/slices/moviesSlice';
import {useAppDispatch} from 'store/store';

const useFavorite = () => {
  const dispatch = useAppDispatch();

  const handleFavorite = (id: number, value: boolean) => {
    if (value) {
      dispatch(moviesSlice.actions.addToFavorites({id}));
    } else {
      dispatch(moviesSlice.actions.removeFromFavorites({id}));
    }
  };

  return {handleFavorite};
};

export default useFavorite;
