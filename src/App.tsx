import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Impressum from './components/Content/Impressum';
import Content from './components/Content/Content';
import Vita from './components/Content/Vita.tsx';
import Contact from './components/Content/Contact.tsx';
import Footer from './components/Footer/Footer.tsx';
import Navbar from './components/Navbar/Navbar';
import Policy from './components/Content/Policy.tsx';
import Overview from './components/Content/Overview.tsx';
import Service from './components/Content/Service.tsx';
import { createTheme, CssBaseline, Divider, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    h1: { fontWeight: 500 },
    h2: { fontWeight: 500 },
    h3: { fontWeight: 500 },
    h4: { fontWeight: 500 },
    h5: { fontWeight: 500 },
    h6: { fontWeight: 500 },
    body1: { fontWeight: 300 },
    body2: { fontWeight: 300 },
  },
  palette: {
    primary: {
      main: '#85ab7f',
    },
    secondary: {
      main: '#737373',
    },
    background: {
      default: '#efeeee',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <Router>
      <Navbar />
      <Divider />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/overview" element={<Overview />} />
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
    </ThemeProvider>
  );
}

export default App;