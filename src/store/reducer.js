import { combineReducers } from 'redux-immer';
import { reducer as recommandReducer } from '../app/Recommend/store/index';

export default combineReducers({
  recommend: recommandReducer,
});
