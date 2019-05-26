// @flow

import axios, {type AxiosInstance} from 'axios';

const request: AxiosInstance = axios.create({
  withCredentials: true,
});

export default request;
