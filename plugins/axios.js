// import axios from 'axios';
import _ from 'lodash';
import qs from 'qs';
import client from './../config/client';

// const baseURL = process.env.api;
const baseURL = client.api;
//透過axios向API請求資料

// const ax = axios.create({ baseURL }); //建立與API跟目錄連線與操作的物件

// function fetch(_method = 'GET', url, _params = {}, _extendOption = {}) {
function fetch(_method = 'GET', url, _params = {}, _extendOption = {}, ax) {
  const method = _.toUpper(_method);
  let params = {};
  // method.match(/GET/)  //match比對完的結果會回傳一個OBJ，而屬性input則為method的值，故 字串.match(正規表示).input 可用於switch-case裡面
  switch (method) {
    case (method.match(/POST|PUT|PATCH/) || {}).input:
      params.data = _params;
      break;
    case (method.match(/GET/) || {}).input:
      params.params = _params;
      break;
    default:
      params = {};
      break;
  }
  return ax.request({//透過連線操作物件，向API請求與傳送資料
    url,
    method,
    paramsSerializer: (params) => {//預防瀏覽器不支援做轉換
      return qs.stringify(params, { encodeValuesOnly: true });
    },
    ...params,
    ..._extendOption,
    // withCredentials: true,
  }).then((response) => response.data);
}

export default function ({ $axios }) {
  const ax = $axios.create({ baseURL }); //建立與API跟目錄連線與操作的物件
  $axios.get = (url, _params = {}, _extendOption = {}) => fetch('GET', url, _params, _extendOption, ax);
  $axios.post = (url, _params = {}, _extendOption = {}) => fetch('POST', url, _params, _extendOption, ax);
  $axios.put = (url, _params = {}, _extendOption = {}) => fetch('PUT', url, _params, _extendOption, ax);
  $axios.patch = (url, _params = {}, _extendOption = {}) => fetch('PATCH', url, _params, _extendOption, ax);
  $axios.delet = (url, _params = {}, _extendOption = {}) => fetch('DELET', url, _params, _extendOption, ax);
  $axios.interceptors.response.use(
    (response) => {
      return response && response.data;
    },
    (error) => {
      return Promise.reject(error.response && error.response.data);
    }
  );
}