import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

//You can also customize the headers.
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

//This will be shared in all files of your project.
axios.interceptors.request.use(request => {
   console.log(request);
   return request;
}, error => {
   console.log(error);
   return Promise.reject(error);
});

axios.interceptors.response.use(response => {
   console.log(response);
   return response;
}, error => {
   console.log(error);
   return Promise.reject(error);
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
