import axios from 'axios';
const SERVER_URL = 'https://damp-stream-51136.herokuapp.com';

const login = async data => {
  const LOGIN_ENDPOINT = `${SERVER_URL}/api/user/login`;

  try {
    let response = await axios.post(LOGIN_ENDPOINT, data);

    if (response.status === 200 && response.data) {
      let jwt = response.headers['x-auth-token'];
      console.log(jwt);
      localStorage.setItem('x-auth-token', jwt);
    }
  } catch (e) {
    console.log(e);
  }
};

const register = async data => {
  const SIGNUP_ENDPOINT = `${SERVER_URL}/api/users`;
  try {
    let response = await axios({
      method: 'post',
      responseType: 'json',
      url: SIGNUP_ENDPOINT,
      data: data
    });
  } catch (e) {
    console.log(e);
  }
};

export { login, register };
