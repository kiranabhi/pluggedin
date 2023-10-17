import { Stack } from '@mui/material';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import { Link } from "react-router-dom";
import { IconButton, Typography, ToggleButtonGroup, ToggleButton } from '@mui/material';
import * as React from 'react';

//import { logo } from '../utils/constants';
import { Search } from './';

const NavHeader = () => {

  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);

    if(event.target.value == 'dark' && !document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.add('dark');
    } else if(event.target.value == 'light' && !document.documentElement.classList.contains('light')) {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <Stack alignItems="center" p={2} className=" bg-white dark:bg-black" sx={{ flexDirection: { sx: "column", md: "row" }, position: "sticky", top: 0, justifyContent: "space-between" }}>
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        {/* <img src={logo} alt="PluggedIn" height={35} /> */}
        <IconButton sx={{ p: '10px', color: 'red', fontSize: 'small' }} aria-label='HomePage'>
          <HeadphonesIcon />
          <Typography variant="body2" className="text-black dark:text-white" sx={{ ml: 2, fontWeight: 'bold', fontSize: '20px' }}>Plugged-In</Typography>
        </IconButton>
      </Link>
      <Search />
      <ToggleButtonGroup
        className="bg-white text-black"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton className="rounded-md" value="light">Light</ToggleButton>
        <ToggleButton value="dark">Dark</ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  )
};

export default NavHeader;