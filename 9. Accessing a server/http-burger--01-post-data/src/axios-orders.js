import axios from "axios";

const instance = axios.create({
   baseURL: 'https://my-burger-app-31586-default-rtdb.firebaseio.com/'
});

export default instance;