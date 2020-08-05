import axios from 'axios';

const baseURL = 'http://localhost:3000';

const instance = axios.create({
  baseURL: baseURL,
});

instance.interceptors.request.use(
  (res) => res.data,
  (err) => {
    console.log(err, '网络错误');
  }
);
export { instance };
