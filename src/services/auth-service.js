import axios from 'axios';


const url = 'http://localhost:3000/';

export default {
    login(user) {
        return axios
            .post(url + 'user/login', user)
            .then(result => result)
    },
    signup(user) {
        return axios
            .post(url + 'user/signup', user)
            .then(result => result)
    },
    getFamily(){
        return axios
            .get(url + 'user/family')
            .then(result=> result)
    }
}
