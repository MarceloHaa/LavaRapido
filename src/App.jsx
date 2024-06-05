import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';

import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ScrolTotop';

function App() {
    const [] = useState(0);

    return (
        <BrowserRouter>
            <ScrollToTop />
            <Navbar />

            <div>
                <Container customClass="min-heigth" />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/aboutUs" element={<AboutUs />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
