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
        return (draftState.bannerList = action.data);
      case actionType.CHANGE_RECOMMEND_LIST:
        return (draftState.recommendList = action.data);
      default:
        return state;
    }
  });
export default reducer;
