import React from 'react';
import { useNavigate } from "react-router-dom";

function Header({ setShowElements }) {
    const navigate = useNavigate();

    function handleNavigation(path, shouldHide = false) {
        if (typeof setShowElements === 'function') {
            if (shouldHide) {
                setShowElements(false);
            } else {
                setShowElements(true);
            }
        }
        navigate(path);
    }

    return (
        <div className='justify-center font-serif mt-5'>
            <h1 className='text-6xl text-couleur-titre text-center'>Lavage-Auto</h1>
            <ul className='flex justify-center py-9'>
                <li className='px-9 hover:underline cursor-pointer transform text-xl transition duration-300 hover:scale-125'>
                    <a onClick={() => handleNavigation('/home')} href="#">Accueil</a>
                </li>
                <li className='px-9 hover:underline cursor-pointer transform text-xl transition duration-300 hover:scale-125'>
                    <a onClick={() => handleNavigation('/#roadToApropos')} href="#roadToApropos">À propos</a>
                </li>
                <li className='px-9 hover:underline cursor-pointer transform text-xl transition duration-300 hover:scale-125'>
                    <a onClick={() => handleNavigation('/#roadToPrestations')} href="#roadToPrestations">Prestations</a>
                </li>
                <li className='px-9 hover:underline cursor-pointer transform text-xl transition duration-300 hover:scale-125'>
                    <a onClick={() => handleNavigation('/#roadToFaq')} href="#roadToFaq">FAQ</a>
                </li>
                <li className='px-9 inline hover:underline cursor-pointer transform text-xl transition duration-300 hover:scale-125'>
                    <a onClick={() => handleNavigation('/#roadToContact')} href="#roadToContact">Contact</a>
                </li>
            </ul>
        </div>
    );
}

export default Header;
