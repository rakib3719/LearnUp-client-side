import axios from "axios";

const commonAxios = axios.create({
    baseURL: 'https://a11-server-side-pi.vercel.app',


  })
const useCommonAxios = () => {
    return commonAxios;
};

export default useCommonAxios;