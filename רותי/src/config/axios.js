import axios from "axios";

console.log('axios changed');
axios.defaults.baseURL = 'http://localhost:5000';

export default axios;