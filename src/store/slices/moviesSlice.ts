import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {Movie} from '../../types/movie';
import {getMovieApi} from 'services/mockApi';

export interface MovieSliceState {
  movies: Movie[];
  loading: boolean;
  error?: string;
}

const initialState: MovieSliceState = {
  movies: [],
  loading: false,
  error: '',
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
  reducers: _ => ({}),
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
    selectProducts: s => s.movies,
  },
});
