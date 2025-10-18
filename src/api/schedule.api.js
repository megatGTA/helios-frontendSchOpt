// TO BE IMPLEMENTED
// Schedule API module using configured httpClient

import httpClient from './httpClient';

export const scheduleApi = {
	async list(params = {}) {
		return httpClient.get('/schedules', { params }).then((r) => r.data);
	},

	async optimize(payload) {
		return httpClient.post('/schedules/optimize', payload).then((r) => r.data);
	},

	async getById(id) {
		return httpClient.get(`/schedules/${id}`).then((r) => r.data);
	},
};

export default scheduleApi;


