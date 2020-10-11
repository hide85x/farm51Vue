import axios from 'axios';

const url = 'http://localhost:3000/';

export default {
    addCash(cash) {
        return axios
            .post(url + 'user/transferCash', cash)
            .then(result => result)
    },
    doShoping(title, cost) {
        return axios
            .post(url + 'user/spendCash', title, cost)
            .then(result=> result)
    }
 
}