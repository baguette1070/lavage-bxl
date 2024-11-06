import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from "./Header.jsx";
import Body from "./Body.jsx";
import About from "./About.jsx";
import Prestations from "./Prestations.jsx";
import Prix from "./Prix.jsx";
import Faq from "./Faq.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";

function App() {
    const [showElements, setShowElements] = useState(true);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/prix') {
            setShowElements(false);
        } else {
            setShowElements(true);
        }
    }, [location.pathname]);

    return (
        <>
            {showElements && (
                <>
                    <Header setShowElements={setShowElements} />
                    <Body />
                    <About />
                    <Prestations setShowElements={setShowElements} />
                    <Faq />
                    <Contact />
                    <Footer />
                </>
            )}

            <Routes>
                <Route path="/prix" element={<Prix />} />
                {/* Ajoutez ici d'autres routes si nécessaire */}
            </Routes>
        </>
    );
}

export default App;
