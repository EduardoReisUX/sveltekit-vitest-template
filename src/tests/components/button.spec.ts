import { fireEvent, render, screen } from '@testing-library/svelte';
import Button from '$src/components/Button.svelte';

describe('Button component', () => {
	it('should increment', async () => {
		render(Button);

		const button = screen.getByRole('button');
		expect(button.innerHTML).toBe('0');

		await fireEvent.click(button);
		expect(button.innerHTML).toBe('1');

		await fireEvent.click(button);
		expect(button.innerHTML).toBe('2');

		await fireEvent.click(button);
		expect(button.innerHTML).not.toBe('4');
	});

	it('should increment with props', async () => {
		render(Button, { props: { counter: 50 } });

		const button = screen.getByRole('button');
		expect(button.innerHTML).toBe('50');

		await fireEvent.click(button);
		expect(button.innerHTML).toBe('51');
	});
});
