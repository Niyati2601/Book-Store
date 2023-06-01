import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const handleSearch = () => {
    // Perform search logic here
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#f6f6f6', padding: '5px' }}>
      <TextField
        placeholder="What are you looking for.."
        variant="outlined"
        style={{ backgroundColor: 'white', marginRight: '5px' }}
      />
      <Button
        variant="contained"
        onClick={handleSearch}
        style={{ backgroundColor: 'green', color: 'white' }}
      >
        <SearchIcon />
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
