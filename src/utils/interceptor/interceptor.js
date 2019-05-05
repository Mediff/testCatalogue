import axios from 'axios';
import { clearToken, getToken } from '../localStorage/localStorage';

export default {
    setupInterceptors: (store, history) => {
        axios.interceptors.response.use(response => response, (error) => {
            if (error.response.status === 401) {
                history.push('/login');
                clearToken();
            }
            return Promise.reject(error);
        });

        axios.interceptors.request.use((config) => {
            const token = getToken();
            if (token) {
                config.headers.Authorization = token;
            }
            return config;
        }, error => Promise.reject(error));
    },
};
