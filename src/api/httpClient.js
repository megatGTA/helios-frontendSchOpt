// TO BE IMPLEMENTED
// Axios instance with basic interceptors and env-driven baseURL

import axios from 'axios';

const httpClient = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
	timeout: 15000,
});

// Request interceptor: attach auth token if present
httpClient.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem('accessToken');
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => Promise.reject(error)
);

// Response interceptor: global error normalization
httpClient.interceptors.response.use(
	(response) => response,
	(error) => {
		// Standardize error object shape
		const normalized = {
			status: error?.response?.status || 0,
			message: error?.response?.data?.message || error.message || 'Unexpected error',
			data: error?.response?.data,
		};
		return Promise.reject(normalized);
	}
);

export default httpClient;


