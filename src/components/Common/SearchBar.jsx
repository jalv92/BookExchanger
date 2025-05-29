// src/components/Common/SearchBar.jsx
import React from 'react';

export const SearchBar = ({ onSearch }) => {
  return (
    <div>
      <input type="search" placeholder="Search books..." onChange={(e) => onSearch && onSearch(e.target.value)} />
      SearchBar Component Placeholder
    </div>
  );
};
