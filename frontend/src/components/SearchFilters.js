import React, { useState } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Input } from '../common';
import '../styles/components/SearchFilters.css';

const SearchFilters = ({ onFiltersChange, category }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [filters, setFilters] = useState({
    sortBy: 'relevance',
    dateRange: 'all',
    contentType: 'all',
    minLength: '',
    maxLength: '',
    customDateFrom: '',
    customDateTo: '',
  });

  const handleFilterChange = (filterName, value) => {
    const newFilters = { ...filters, [filterName]: value };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const resetFilters = () => {
    const defaultFilters = {
      sortBy: 'relevance',
      dateRange: 'all',
      contentType: 'all',
      minLength: '',
      maxLength: '',
      customDateFrom: '',
      customDateTo: '',
    };
    setFilters(defaultFilters);
    onFiltersChange(defaultFilters);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const getSortOptions = () => {
    const baseOptions = [
      { value: 'relevance', label: 'Most Relevant' },
      { value: 'newest', label: 'Newest First' },
      { value: 'oldest', label: 'Oldest First' },
    ];

    if (category === 'CATEGORY_POSTS' || category === 'CATEGORY_ARTICLES') {
      baseOptions.push(
        { value: 'popular', label: 'Most Popular' },
        { value: 'comments', label: 'Most Commented' }
      );
    }

    if (category === 'CATEGORY_USERS') {
      baseOptions.push(
        { value: 'followers', label: 'Most Followers' },
        { value: 'activity', label: 'Most Active' }
      );
    }

    return baseOptions;
  };

  const getContentTypeOptions = () => {
    if (category === 'CATEGORY_POSTS') {
      return [
        { value: 'all', label: 'All Posts' },
        { value: 'text', label: 'Text Only' },
        { value: 'media', label: 'With Media' },
        { value: 'links', label: 'With Links' },
      ];
    }

    if (category === 'CATEGORY_ARTICLES') {
      return [
        { value: 'all', label: 'All Articles' },
        { value: 'tutorial', label: 'Tutorials' },
        { value: 'discussion', label: 'Discussions' },
        { value: 'news', label: 'News' },
      ];
    }

    return [{ value: 'all', label: 'All Content' }];
  };

  return (
    <div className="search-filters card card--dark" role="region" aria-label="Search filters">
      <div className="card__body">
        <div className="search-filters__header">
          <h5 id="filters-heading">Filters</h5>
          <Button
            className="search-filters__toggle"
            color="sub"
            size="sm"
            onClick={toggleExpanded}
            iconName={isExpanded ? 'chevron-up' : 'chevron-down'}
            aria-expanded={isExpanded}
            aria-controls="advanced-filters"
            aria-labelledby="filters-heading"
          />
        </div>

        <div className="search-filters__basic">
          <div className="filter-group">
            <label htmlFor="sort-select" className="filter-label">Sort by:</label>
            <select
              id="sort-select"
              className="filter-select"
              value={filters.sortBy}
              onChange={(e) => handleFilterChange('sortBy', e.target.value)}
              aria-describedby="sort-help"
            >
              {getSortOptions().map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <span id="sort-help" className="sr-only">Choose how to sort search results</span>
          </div>
        </div>

        {isExpanded && (
          <div 
            id="advanced-filters" 
            className="search-filters__advanced"
            role="group"
            aria-labelledby="filters-heading"
          >
            <div className="filter-group">
              <label htmlFor="date-range-select" className="filter-label">Date Range:</label>
              <select
                id="date-range-select"
                className="filter-select"
                value={filters.dateRange}
                onChange={(e) => handleFilterChange('dateRange', e.target.value)}
                aria-describedby="date-help"
              >
                <option value="all">All Time</option>
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="year">This Year</option>
                <option value="custom">Custom Range</option>
              </select>
              <span id="date-help" className="sr-only">Filter results by date range</span>
            </div>

            {filters.dateRange === 'custom' && (
              <div className="filter-group filter-group--row" role="group" aria-label="Custom date range">
                <Input
                  type="date"
                  placeholder="From"
                  value={filters.customDateFrom}
                  onChange={(e) => handleFilterChange('customDateFrom', e.target.value)}
                  className="filter-input--small"
                  aria-label="Start date"
                />
                <Input
                  type="date"
                  placeholder="To"
                  value={filters.customDateTo}
                  onChange={(e) => handleFilterChange('customDateTo', e.target.value)}
                  className="filter-input--small"
                  aria-label="End date"
                />
              </div>
            )}

            {(category === 'CATEGORY_POSTS' || category === 'CATEGORY_ARTICLES') && (
              <>
                <div className="filter-group">
                  <label htmlFor="content-type-select" className="filter-label">Content Type:</label>
                  <select
                    id="content-type-select"
                    className="filter-select"
                    value={filters.contentType}
                    onChange={(e) => handleFilterChange('contentType', e.target.value)}
                    aria-describedby="content-type-help"
                  >
                    {getContentTypeOptions().map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <span id="content-type-help" className="sr-only">Filter by type of content</span>
                </div>

                <div className="filter-group">
                  <label className="filter-label">Content Length:</label>
                  <div className="filter-group--row" role="group" aria-label="Content length range">
                    <Input
                      type="number"
                      placeholder="Min chars"
                      value={filters.minLength}
                      onChange={(e) => handleFilterChange('minLength', e.target.value)}
                      className="filter-input--small"
                      aria-label="Minimum character count"
                      min="0"
                    />
                    <Input
                      type="number"
                      placeholder="Max chars"
                      value={filters.maxLength}
                      onChange={(e) => handleFilterChange('maxLength', e.target.value)}
                      className="filter-input--small"
                      aria-label="Maximum character count"
                      min="0"
                    />
                  </div>
                </div>
              </>
            )}

            <div className="filter-actions">
              <Button
                color="sub"
                size="sm"
                text="Reset Filters"
                onClick={resetFilters}
                className="filter-reset-btn"
                aria-label="Reset all filters to default values"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchFilters;