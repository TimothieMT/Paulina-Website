import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Impressum from './components/Content/Impressum';
import Content from './components/Content/Content';
import Vita from './components/Content/Vita.tsx';
import Contact from './components/Content/Contact.tsx';
import Footer from './components/Footer/Footer.tsx';
import Navbar from './components/Navbar/Navbar';
import Policy from './components/Content/Policy.tsx';
import Overview from './components/Content/Overview.tsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/vita" element={<Vita />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/content" element={<Content />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;