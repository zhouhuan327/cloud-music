import { instance as axios } from './config';

export const getBannerRequest = () => axios.get('/banner');

export const getRecommendListRequest = () => axios.get('/personalized');
