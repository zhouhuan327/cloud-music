import * as actionTypes from './constants';
import {
  getBannerRequest,
  getRecommendListRequest,
} from '../../../api/request';

const changeBannerList = (data) => ({
  type: actionTypes.CHANGE_BANNER,
  data,
});

const changeRecommendList = (data) => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  data,
});
const changeEnterLoading = (data) => ({
  type: actionTypes.CHANGE_ENTER_LOADING,
  data,
});
export const getBannerList = () => {
  return (dispatch) => {
    getBannerRequest()
      .then(({ data }) => {
        dispatch(changeBannerList(data.banners));
      })
      .catch((e) => {
        console.log('轮播图数据传输错误', e);
      });
  };
};

export const getRecommendList = () => {
  return (dispatch) => {
    getRecommendListRequest()
      .then(({ data }) => {
        dispatch(changeRecommendList(data.result));
        dispatch(changeEnterLoading(false)); // 改变 loading
      })
      .catch(() => {
        console.log('推荐歌单数据传输错误');
      });
  };
};
