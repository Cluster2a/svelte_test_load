
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, request }) => {
	// STREAMING: Return promise without await
	// This allows page to render immediately while data loads
	const apiDataPromise = fetch('/api/data', {
		signal: request.signal
	})
		.then(r => r.json())
		.catch(error => {
			if (error.name === 'AbortError') {
				console.log('Fetch cancelled for route A');
				return { response: false, message: 'Cancelled', timestamp: null };
			}
			throw error;
		});

	return {
		message: 'Hello from route a!',
		routeA: apiDataPromise
	};
};
