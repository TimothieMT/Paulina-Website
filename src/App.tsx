import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Impressum from './components/Content/Impressum';
import Content from './components/Content/Content';
import Vita from './components/Content/Vita.tsx';
import Contact from './components/Content/Contact.tsx';
import Footer from './components/Footer/Footer.tsx';
import Navbar from './components/Navbar/Navbar';
import Policy from './components/Content/Policy.tsx';
import Pricing from './components/Content/pricing.tsx';
import Service from './components/Content/Service.tsx';
import { Divider } from '@mui/material';

function App() {
  return (
    <Router>
      <Navbar />
      <Divider />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/overview" element={<Pricing />} />
        <Route path="/vita" element={<Vita />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/content" element={<Content />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/service" element={<Service />} />
      </Routes>
      <Divider />
      <Footer />
    </Router>
  );
}

export default App;