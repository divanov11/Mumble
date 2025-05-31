import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import SearchFilters from '../../components/SearchFilters';
import store from '../../store';

const renderSearchFilters = (props = {}) => {
  const defaultProps = {
    onFiltersChange: jest.fn(),
    category: 'CATEGORY_POSTS',
    ...props,
  };

  return render(
    <Provider store={store}>
      <BrowserRouter>
        <SearchFilters {...defaultProps} />
      </BrowserRouter>
    </Provider>
  );
};

describe('SearchFilters Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders filters heading and basic sort dropdown', () => {
    renderSearchFilters();
    
    expect(screen.getByText('Filters')).toBeInTheDocument();
    expect(screen.getByLabelText('Sort by:')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Most Relevant')).toBeInTheDocument();
  });

  test('expands advanced filters when toggle button is clicked', async () => {
    const user = userEvent.setup();
    renderSearchFilters();
    
    const toggleButton = screen.getByRole('button', { name: /filters/i });
    await user.click(toggleButton);
    
    expect(screen.getByLabelText('Date Range:')).toBeInTheDocument();
    expect(screen.getByLabelText('Content Type:')).toBeInTheDocument();
  });

  test('calls onFiltersChange when sort option is changed', async () => {
    const mockOnFiltersChange = jest.fn();
    const user = userEvent.setup();
    renderSearchFilters({ onFiltersChange: mockOnFiltersChange });
    
    const sortSelect = screen.getByLabelText('Sort by:');
    await user.selectOptions(sortSelect, 'newest');
    
    expect(mockOnFiltersChange).toHaveBeenCalledWith(
      expect.objectContaining({ sortBy: 'newest' })
    );
  });

  test('shows custom date inputs when custom date range is selected', async () => {
    const user = userEvent.setup();
    renderSearchFilters();
    
    // Expand advanced filters
    const toggleButton = screen.getByRole('button', { name: /filters/i });
    await user.click(toggleButton);
    
    // Select custom date range
    const dateRangeSelect = screen.getByLabelText('Date Range:');
    await user.selectOptions(dateRangeSelect, 'custom');
    
    expect(screen.getByLabelText('Start date')).toBeInTheDocument();
    expect(screen.getByLabelText('End date')).toBeInTheDocument();
  });

  test('resets filters when reset button is clicked', async () => {
    const mockOnFiltersChange = jest.fn();
    const user = userEvent.setup();
    renderSearchFilters({ onFiltersChange: mockOnFiltersChange });
    
    // Expand advanced filters
    const toggleButton = screen.getByRole('button', { name: /filters/i });
    await user.click(toggleButton);
    
    // Change a filter first
    const sortSelect = screen.getByLabelText('Sort by:');
    await user.selectOptions(sortSelect, 'newest');
    
    // Reset filters
    const resetButton = screen.getByText('Reset Filters');
    await user.click(resetButton);
    
    expect(mockOnFiltersChange).toHaveBeenLastCalledWith(
      expect.objectContaining({ sortBy: 'relevance' })
    );
  });

  test('shows appropriate sort options for different categories', () => {
    const { rerender } = renderSearchFilters({ category: 'CATEGORY_USERS' });
    
    const sortSelect = screen.getByLabelText('Sort by:');
    expect(sortSelect).toHaveTextContent('Most Followers');
    expect(sortSelect).toHaveTextContent('Most Active');
    
    // Re-render with posts category
    rerender(
      <Provider store={store}>
        <BrowserRouter>
          <SearchFilters onFiltersChange={jest.fn()} category="CATEGORY_POSTS" />
        </BrowserRouter>
      </Provider>
    );
    
    expect(sortSelect).toHaveTextContent('Most Popular');
    expect(sortSelect).toHaveTextContent('Most Commented');
  });

  test('has proper accessibility attributes', () => {
    renderSearchFilters();
    
    const filtersRegion = screen.getByRole('region', { name: 'Search filters' });
    expect(filtersRegion).toBeInTheDocument();
    
    const toggleButton = screen.getByRole('button');
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
    expect(toggleButton).toHaveAttribute('aria-controls', 'advanced-filters');
  });

  test('supports keyboard navigation', async () => {
    const user = userEvent.setup();
    renderSearchFilters();
    
    const sortSelect = screen.getByLabelText('Sort by:');
    
    // Focus and navigate with keyboard
    await user.tab();
    expect(sortSelect).toHaveFocus();
    
    // Use arrow keys to change selection
    await user.keyboard('{ArrowDown}');
    await user.keyboard('{Enter}');
    
    // Verify the selection changed
    expect(sortSelect.value).not.toBe('relevance');
  });

  test('handles content length filters for posts and articles', async () => {
    const mockOnFiltersChange = jest.fn();
    const user = userEvent.setup();
    renderSearchFilters({ 
      onFiltersChange: mockOnFiltersChange,
      category: 'CATEGORY_POSTS' 
    });
    
    // Expand advanced filters
    const toggleButton = screen.getByRole('button', { name: /filters/i });
    await user.click(toggleButton);
    
    // Set minimum character count
    const minLengthInput = screen.getByLabelText('Minimum character count');
    await user.type(minLengthInput, '100');
    
    expect(mockOnFiltersChange).toHaveBeenCalledWith(
      expect.objectContaining({ minLength: '100' })
    );
  });

  test('maintains filter state when category changes', () => {
    const mockOnFiltersChange = jest.fn();
    const { rerender } = renderSearchFilters({ 
      onFiltersChange: mockOnFiltersChange,
      category: 'CATEGORY_POSTS' 
    });
    
    // Change category
    rerender(
      <Provider store={store}>
        <BrowserRouter>
          <SearchFilters 
            onFiltersChange={mockOnFiltersChange} 
            category="CATEGORY_USERS" 
          />
        </BrowserRouter>
      </Provider>
    );
    
    // Verify component still renders correctly
    expect(screen.getByText('Filters')).toBeInTheDocument();
    expect(screen.getByLabelText('Sort by:')).toBeInTheDocument();
  });
});