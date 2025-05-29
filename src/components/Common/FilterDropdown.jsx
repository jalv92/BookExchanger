// src/components/Common/FilterDropdown.jsx
import React from 'react';

export const FilterDropdown = ({ options, onFilterChange }) => {
  return (
    <select onChange={(e) => onFilterChange && onFilterChange(e.target.value)}>
      FilterDropdown Component Placeholder
      {/* {options?.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)} */}
    </select>
  );
};
