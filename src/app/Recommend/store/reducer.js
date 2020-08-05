import produce from 'immer';
import * as actionType from './constants';

const defaultState = {
  bannerList: [],
  recommendList: [],
};

const reducer = (state = defaultState, action) =>
  produce(state, (draftState) => {
    switch (action.type) {
      case actionType.CHANGE_BANNER:
        draftState.bannerList = action.data;
        break;
      case actionType.CHANGE_RECOMMEND_LIST:
        draftState.recommendList = action.data;
        break;
      default:
        return state;
    }
  });
export default reducer;
