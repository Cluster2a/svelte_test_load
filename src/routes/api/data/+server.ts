import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	// Simulate some processing time
	await new Promise((resolve) => setTimeout(resolve, 2000));

	return json({
		timestamp: new Date().toISOString(),
		message: 'Hello from API endpoint',
		response: true
	});
};

