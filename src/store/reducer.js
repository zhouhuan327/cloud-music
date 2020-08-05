import { combineReducers } from 'redux-immer';
import produce from 'immer';
import { reducer as recommandReducer } from '../app/Recommend/store/index';

export default combineReducers(produce, {
  recommend: recommandReducer,
});
