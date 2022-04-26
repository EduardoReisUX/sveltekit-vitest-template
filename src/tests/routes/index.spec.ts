import { render, screen, fireEvent } from '@testing-library/svelte';
import IndexPage from '$src/routes/index.svelte';

describe('Home page', () => {
	describe('receiving other components', () => {
		it('should render components normally', async () => {
			render(IndexPage);

			const button = screen.getByText('0');
			await fireEvent.click(button);

			expect(button.innerHTML).toBe('1');
		});
	});
});
