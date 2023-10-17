import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import { NavHeader, Feed, ChannelDetail, VideoDetail, SearchFeed } from './components';

export default function App() {
  return (
    <BrowserRouter>
        <Box className="bg-white dark:bg-black"> {/* sx={{ backgroundColor: '#000' }} */}
            <NavHeader />
            <Routes>
                <Route exact path="/" element={<Feed />} />
                <Route path='/video/:id' element={<VideoDetail />} />
                <Route path='/channel/:id' element={<ChannelDetail />} />
                <Route path='/search/:searchTerm' element={<SearchFeed />} />
            </Routes>
        </Box>
    </BrowserRouter>
  )
}