import { instance as axios } from './config';

export const getBannerRequest = () => axios.get('/banner');

export const getRecommendListRequest = () => axios.get('/personalized');

export const getHotSingerListRequest = (count) => {
  return axios.get(`/top/artists?offset=${count}`);
};

export const getSingerListRequest = (type, area, alpha, count) => {
  return axios.get(
    `/artist/list?type=${type}&area=${area}initial=${alpha.toLowerCase()}&offset=${count}`
  );
};
