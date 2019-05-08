import axios from 'axios';
import { restURL } from '../baseURL';

export const login = user => axios.post(`${restURL}/login/`, user);
export const register = user => axios.post(`${restURL}/register/`, user);
