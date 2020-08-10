import { combineReducers } from 'redux-immer';
import produce from 'immer';
import { reducer as recommandReducer } from '../app/Recommend/store/index';
import { reducer as singersReducer } from '../app/Singers/store/index';
export default combineReducers(produce, {
  recommend: recommandReducer,
  singers: singersReducer,
});
