import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery('FETCH_MOVIES', fetchAllMovies);
  yield takeEvery('FETCH_GENRES', fetchAllGenres);
  yield takeLatest('FETCH_DISPLAY_MOVIE', fetchMovie);
  yield takeLatest('ADD_MOVIE', postNewMovie)
}

function* fetchAllMovies() {
  try {
    // Get the movies:
    const moviesResponse = yield axios.get('/api/movies');
    // Set the value of the movies reducer:
    yield put({
      type: 'SET_MOVIES',
      payload: moviesResponse.data
    });
  } catch (error) {
    console.log('fetchAllMovies error:', error);
  }
}

function* fetchAllGenres() {
  try {
    // Get the movies:
    const genresResponse = yield axios.get('/api/genres');
    // Set the value of the movies reducer:
    yield put({
      type: 'SET_GENRES',
      payload: genresResponse.data
    });
  } catch (error) {
    console.log('fetchAllGenres error:', error);
  }
}

function* fetchMovie(action) {
  try {
    // Get the movies:
    const moviesResponse = yield axios.get(`/api/movies/${action.payload}`);
    // Set the value of the movies reducer:
    yield console.log(moviesResponse);
    yield put({
      type: 'SET_DISPLAY_MOVIE',
      payload: moviesResponse.data[0]
    });
  } catch (error) {
    console.log('fetchMovie error:', error);
  }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return  action.payload;
    default:
      return state;
  }
}

const movieDisplay = (state = {}, action) => {
  switch (action.type) {
    case 'SET_DISPLAY_MOVIE':
      return action.payload;
    default:
      return state;
  }
}

function* postNewMovie(action) {
  try {
    yield console.log(action.payload);
    yield axios.post("/api/movies", action.payload);
    
  } catch (error) {
    console.log("Error with Post:", error);
  }
}

// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case 'SET_GENRES':
      return action.payload;
    default:
      return state;
  }
}

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
    movieDisplay,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

export default storeInstance;
