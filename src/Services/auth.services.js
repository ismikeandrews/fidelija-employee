import axios from 'axios';
const url = process.env.REACT_APP_BASE_URL;

const AuthService = {
    async authenticate(data){
        const endPoint = `${url}oauth/token`
        return axios.post(endPoint, data);
    },

    async setLoggedUser(userData, token){
        const stringUserData = JSON.stringify(userData);
        const stringAuthData = JSON.stringify(token);
        localStorage.setItem("userData", stringUserData);
        localStorage.setItem("authData", stringAuthData);
    },

    async getEmployee(data){
        const endPoint = `${url}api/employee-data`
        return axios.get(endPoint, { headers: { Authorization: `${data.token_type} ${data.access_token}` }})
    },
    
    getAuthData(){
        const data = localStorage.getItem("authData");
        if(!data) return null;
        try {
            return JSON.parse(data);
        } catch (error) {
            console.log(error);
            return null;
        }
    },

    getLoggedUser(){
        const data = localStorage.getItem("userData");
        if (!data) return null;
        try {
            return JSON.parse(data);
        } catch (error) {
            console.log(error);
            return null;
        }
    },

    isAuthenticated(){
        const data = localStorage.getItem("authData");
        if(data){
            return true;
        }else{
            return false;
        }
    },

    clearLoggedUser(){
        const data = localStorage.getItem("authData");
        if (data) {
            localStorage.removeItem("authData");
            localStorage.removeItem("userData")
            window.location.replace("/");
        }
    },

    getUserType(){
        if(localStorage.getItem("authData")){
            const { is_admin, is_employee } = JSON.parse(localStorage.getItem("userData"))
            if(is_admin === 1){
                return {is_admin: true, is_employee: false}
            }
            if(is_employee === 1){
                return {is_employee: true, is_admin: false}
            }
        }else {
        }
    }
}

export default AuthService;