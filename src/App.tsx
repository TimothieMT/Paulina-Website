import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './components/Navbar/Navbar';
import MainPoints from './components/Content/MainPoints.tsx';
import Impressum from './components/Content/Impressum';
import AboutMe from './components/Content/AboutMe.tsx';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import { Box } from '@mui/material';
import Offers from './components/Content/Offers.tsx';
import Contact from './components/Content/Contact.tsx';

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // Layout über die gesamte Bildschirmhöhe
      }}
    >
      <Router>
        <ResponsiveAppBar />
        <Box
          component="main"
          sx={{
            flexGrow: 1, // Füllt den verfügbaren Platz
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/mainPoints" element={<MainPoints />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/aboutMe" element={<AboutMe />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/content" element={<Content />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </Box>
      </Router>
      <Footer />
    </Box>
  );
}

export default App;