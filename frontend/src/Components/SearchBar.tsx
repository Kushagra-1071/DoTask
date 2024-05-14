import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const SearchBar: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  return (
    <TextField
      label="Search "
      variant="filled"
      value={searchText}
      onChange={handleSearchChange}
      size="medium"
      fullWidth
    />
  );
};

export default SearchBar;