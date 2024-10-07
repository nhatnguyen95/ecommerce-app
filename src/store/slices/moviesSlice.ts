import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import {Movie} from '../../types/movie';
import {getMovieApi} from 'services/mockApi';

export interface MovieSliceState {
  movies: Movie[];
  loading: boolean;
  error?: string;
  favoriteMovies: number[];
  bookedMovies: number[];
}

const initialState: MovieSliceState = {
  movies: [],
  loading: false,
  error: '',
  favoriteMovies: [],
  bookedMovies: [],
};

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (_, {rejectWithValue}) => {
    try {
      const {data} = await getMovieApi();
      return data as Movie[];
    } catch (err) {
      return rejectWithValue('Error');
    }
  },
);

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: create => ({
    addToFavorites: create.reducer(
      (state, action: PayloadAction<{id: number}>) => {
        state.favoriteMovies.push(action.payload.id);
      },
    ),
    removeFromFavorites: create.reducer(
      (state, action: PayloadAction<{id: number}>) => {
        state.favoriteMovies = state.favoriteMovies.filter(
          i => i !== action.payload.id,
        );
      },
    ),
    booking: create.reducer((state, action: PayloadAction<{id: number}>) => {
      state.bookedMovies.push(action.payload.id);
    }),
    cancelBooking: create.reducer(
      (state, action: PayloadAction<{id: number}>) => {
        state.bookedMovies = state.bookedMovies.filter(
          i => i !== action.payload.id,
        );
      },
    ),
  }),
  extraReducers: builder => {
    builder
      .addCase(fetchMovies.pending, state => {
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  selectors: {
    selectMovies: s => s.movies,
    selectBookedIds: s => s.bookedMovies,
    selectFavoriteIds: s => s.favoriteMovies,
  },
});

export const selectMovies = createSelector(
  moviesSlice.selectors.selectMovies,
  moviesSlice.selectors.selectBookedIds,
  moviesSlice.selectors.selectFavoriteIds,
  (movies, bookedIds, favoriteIds) =>
    movies
      .filter(i => !bookedIds.includes(i.id))
      .map(i => ({
        ...i,
        isFavorite: favoriteIds.includes(i.id),
      })),
);

export const selectBookedMovies = createSelector(
  moviesSlice.selectors.selectMovies,
  moviesSlice.selectors.selectBookedIds,
  (movies, ids) => movies.filter(i => ids.includes(i.id)),
);

export const selectFavoriteMovies = createSelector(
  moviesSlice.selectors.selectMovies,
  moviesSlice.selectors.selectFavoriteIds,
  (movies, ids) => movies.filter(i => ids.includes(i.id)),
);
