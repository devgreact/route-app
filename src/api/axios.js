import axios from "axios";

// http://localhost:3000?api_key=4564564&a=hello

const instance = axios.create({
  baseURL: "http://localhost:3000",
  // baseURL: "http://192.168.0.144:9944",
  params: {
    api_key: 4564564,
    a: "hello",
  },
});
export default instance;
