import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ResponsiveAppBar from "./components/Navbar/Navbar";
import Therapie from "./components/Content/Therapie";
import Impressum from "./components/Content/Impressum";
import Uebermich from "./components/Content/Uebermich";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <>
            <Router>
                <ResponsiveAppBar/>
                <Routes>
                    {/* Fügen Sie die Startseitenroute hinzu */}
                    <Route path="/" element={<Content/>}/>
                    <Route path="/ueber-mich" element={<Uebermich/>}/>
                    <Route path="/therapie" element={<Therapie/>}/>
                    <Route path="/impressum" element={<Impressum/>}/>
                    <Route path="/content" element={<Content/>}/>
                </Routes>
            </Router>
            <Footer/>
        </>
    );
}

export default App;