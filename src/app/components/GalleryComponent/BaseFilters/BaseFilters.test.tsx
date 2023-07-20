import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { BaseFiltersComponent } from './BaseFiltersComponent';

describe('BaseFiltersComponent', () => {
  const handleChange = jest.fn();

  test('renders all filter options', () => {
    render(<BaseFiltersComponent handleChange={handleChange} disabled={false} />);

    // Verify that all filter options are rendered
    expect(screen.getByLabelText('Section')).toBeInTheDocument();
    expect(screen.getByLabelText('Sort')).toBeInTheDocument();
    expect(screen.getByLabelText('Window')).toBeInTheDocument();
    expect(screen.getByLabelText('Show Viral')).toBeInTheDocument();
  });
  
  test('handles change events', () => {
    render(<BaseFiltersComponent handleChange={handleChange} disabled={false} />);

    /* Simulate change events for each filter */
    const sectionSelect = screen.getByLabelText('Section');
    const sortSelect = screen.getByLabelText('Sort');
    const windowSelect = screen.getByLabelText('Window');
    const showViralSwitch = screen.getByLabelText('Show Viral');

    userEvent.selectOptions(sectionSelect, 'hot');
    userEvent.selectOptions(sortSelect, 'viral');
    userEvent.selectOptions(windowSelect, 'day');
    userEvent.click(showViralSwitch);

    /* Check that handleChange is called with the correct values */
    expect(handleChange).toHaveBeenNthCalledWith(1, 'section', 'hot');
    expect(handleChange).toHaveBeenNthCalledWith(2, 'sort', 'viral');
    expect(handleChange).toHaveBeenNthCalledWith(3, 'window', 'day');
    expect(handleChange).toHaveBeenNthCalledWith(4, 'showViral', 'true');
  });

  test('disables inputs when disabled prop is true', () => {
    render(<BaseFiltersComponent handleChange={handleChange} disabled={true} />);

    /* Verify that all inputs are disabled */
    const sectionSelect = screen.getByLabelText('Section') as HTMLSelectElement;
    const sortSelect = screen.getByLabelText('Sort') as HTMLSelectElement;
    const windowSelect = screen.getByLabelText('Window') as HTMLSelectElement;
    const showViralSwitch = screen.getByLabelText('Show Viral') as HTMLInputElement;

    expect(sectionSelect).toBeDisabled();
    expect(sortSelect).toBeDisabled();
    expect(windowSelect).toBeDisabled();
    expect(showViralSwitch).toBeDisabled();
  });
});