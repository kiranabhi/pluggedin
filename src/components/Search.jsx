import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState(''); 
    const navigate = useNavigate();

    const onhandleSubmit = (e) => {
        e.preventDefault();

        if(searchTerm) {
            navigate(`/search/${searchTerm}`);
            setSearchTerm('');
        }
    };

  return (
    <Paper 
        component='form'
        onSubmit={onhandleSubmit}
        sx={{
            borderRadius: 2,
            border: '1px solid #F0F8FF',
            pl: 1,
            boxShadow: 'none',
            mr: { sm: 2 },
          }}
    >
          <input
                className='search-bar'
                placeholder='Search Videos'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <IconButton type='submit' sx={{ p: '10px', color: 'grey' }} aria-label='search'>
                <SearchIcon />
            </IconButton>
            <IconButton type='submit' sx={{ p: '10px', color: 'red'}} aria-label='voice search'>
                <MicIcon />
            </IconButton>
    </Paper>
  )
};

export default Search;