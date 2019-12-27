import axios from 'axios';
const SERVER_URL = "http://localhost:3001";

const login = async (data) => {
    const LOGIN_ENDPOINT = `${SERVER_URL}/api/user/login`;

    try {

        let response = await axios.post(LOGIN_ENDPOINT, data);

        if(response.status === 200 && response.data){
            let jwt = response.data;
            localStorage.setItem("auth-token", jwt);
        }
        
    } catch(e){
        console.log(e);
    }
}

export { login } 
