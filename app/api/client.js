import {create} from 'apisauce';

const apiClient = create({
    baseURL: 'http:192.168.18.1:9000/api'
})

export default apiClient;
