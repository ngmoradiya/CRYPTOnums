import axios from "axios";

const instance = axios.create({
  baseURL: "https://mighty-sands-89627.herokuapp.com/",
  // timeout: 10000,
  // headers: {'X-Custom-Header': 'foobar'}
});

export default instance;
