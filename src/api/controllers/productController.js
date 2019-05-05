import axios from 'axios';
import { restURL } from '../baseURL';

export const getProducts = () => axios.get(`${restURL}/products`);
