import {create} from 'apisauce';

const apiClient = create({
    baseURL: 'http:192.168.18.18:9000/api'
})

export default apiClient;