import produce from 'immer';
import * as actionTypes from './constants';

const defaultState = {
  bannerList: [],
  recommendList: [],
  enterLoading: true,
};

const reducer = (state = defaultState, action) =>
  produce(state, (draftState) => {
    switch (action.type) {
      case actionTypes.CHANGE_BANNER:
        draftState.bannerList = action.data;
        break;
      case actionTypes.CHANGE_RECOMMEND_LIST:
        draftState.recommendList = action.data;
        break;
      case actionTypes.CHANGE_ENTER_LOADING:
        draftState.enterLoading = action.data;
        break;
      default:
        return state;
    }
  });
export default reducer;
