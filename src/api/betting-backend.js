import axios from 'axios';

export default axios.create({
  baseURL: 'https://damp-stream-51136.herokuapp.com/api',
  headers: {
    'X-Auth-Token': localStorage.getItem('x-auth-token')
  }
});
