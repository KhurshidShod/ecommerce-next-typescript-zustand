import axios from 'axios';

const request = axios.create({
    baseURL: 'https://ap-vodiy-parfum-backend.up.railway.app/api/v1/',
    timeout: 20000
})

export default request