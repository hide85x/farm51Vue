import axios from 'axios';


const url = 'https://localhost:3000/';

export default {
    login(user) {
        return axios
            .post(url + 'user/login', user)
            .then(result => result)
    },
    getFamily(){
        return axios
        .get(url + 'user/family')
        .then(result=> result)
    }

}
