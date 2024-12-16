import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPoints from './components/Content/MainPoints.tsx';
import Impressum from './components/Content/Impressum';
import AboutMe from './components/Content/AboutMe.tsx';
import Content from './components/Content/Content';
import Offers from './components/Content/Offers.tsx';
import Contact from './components/Content/Contact.tsx';
import Footer from './components/Footer/Footer.tsx';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/mainPoints" element={<MainPoints />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/content" element={<Content />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;