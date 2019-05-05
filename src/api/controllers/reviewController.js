import axios from 'axios';
import { restURL } from '../baseURL';

export const createReview = (review, productId) => axios.post(`${restURL}/reviews/${productId}/`, review);
export const getReviews = productId => axios.get(`${restURL}/reviews/${productId}`);
