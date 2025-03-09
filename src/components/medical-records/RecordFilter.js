import React from 'react';

const RecordFilter = ({ filterType, onFilterChange, sortBy, onSortChange }) => {
  const filterOptions = ['All Records', 'Lab Results', 'Diagnosis', 'Treatment', 'Surgery'];
  const sortOptions = ['Date (Newest)', 'Date (Oldest)', 'Patient Name', 'Record Type'];

  return (
    <div className="record-filter">
      <div className="filter-section">
        <label htmlFor="filter-type">Filter By: </label>
        <select 
          id="filter-type" 
          value={filterType} 
          onChange={(e) => onFilterChange(e.target.value)}
          style={{ padding: '8px 12px', borderRadius: '4px', border: '1px solid #e2e8f0', marginLeft: '8px' }}
        >
          {filterOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="sort-section">
        <label htmlFor="sort-by">Sort By: </label>
        <select 
          id="sort-by" 
          value={sortBy} 
          onChange={(e) => onSortChange(e.target.value)}
          style={{ padding: '8px 12px', borderRadius: '4px', border: '1px solid #e2e8f0', marginLeft: '8px' }}
        >
          {sortOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default RecordFilter; 