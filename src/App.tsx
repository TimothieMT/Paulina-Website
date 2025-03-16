import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPoints from './components/Content/MainPoints.tsx';
import Impressum from './components/Content/Impressum';
import Content from './components/Content/Content';
import Offers from './components/Content/Offers.tsx';
import Contact from './components/Content/Contact.tsx';
import Footer from './components/Footer/Footer.tsx';
import Navbar from './components/Navbar/Navbar';
import { Box, Divider } from '@mui/material';

function App() {
  return (
    <Router>
      <Navbar />
      <Divider sx={{ color: '#85ab7f'}} />
      <Box sx={{ marginTop: 1 }} />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/mainPoints" element={<MainPoints />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/content" element={<Content />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Divider sx={{ color: '#85ab7f'}} />
      <Footer />
    </Router>
  );
}

export default App;