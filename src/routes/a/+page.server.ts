
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	// Return promise without await - enables streaming
	// Page renders immediately while data loads in background
	const apiDataPromise = fetch('/api/data').then(r => r.json());

	return {
		message: 'Hello from route a!',
		routeA: apiDataPromise
	};
};
