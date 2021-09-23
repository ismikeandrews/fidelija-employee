import axios from 'axios';
import { AuthService } from './';
const url = process.env.REACT_APP_BASE_URL;
const AuthStr = AuthService.getAuthData() && { headers: { Authorization: `${AuthService.getAuthData().token_type} ${AuthService.getAuthData().access_token}` }};

const UserService = {
    async getUserByCpf(data){
        const enpoint = `${url}api/user/cpf`
        return axios.post(enpoint, data, AuthStr)
    },
    async registerPoints(data){
        const enpoint = `${url}api/points`
        return axios.post(enpoint, data, AuthStr);
    },
}

export default UserService;