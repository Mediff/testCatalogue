import axios from 'axios';
import { getToken } from '../localStorage/localStorage';

export default {
    setupInterceptors: () => {
        axios.interceptors.response.use(response => response, error => Promise.reject(error));

        axios.interceptors.request.use((config) => {
            const token = getToken();
            if (token) {
                config.headers.Authorization = `Token ${token}`;
            }
            return config;
        }, error => Promise.reject(error));
    },
};
