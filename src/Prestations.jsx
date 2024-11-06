import React from 'react';
import { useNavigate } from 'react-router-dom';
import photoVoitureNumero1 from './assets/viktor-theo-wWN4AiGPscM-unsplash.jpg';
import photoVoitureNumero2 from './assets/severin-demchuk-RYkZRwbmc1U-unsplash.jpg';

function Prestations({ setShowElements }) {

    const navigate = useNavigate();

    const handleNavigation = () => {
        setShowElements(false); // Masque tous les autres composants
        navigate('/prix');      // Navigation vers la page Prix
    };

    return (
        <>
            <div className='pt-12'>
                <div id="roadToPrestations" className='h-7'></div>
                <h1 className='text-black text-4xl text-center pb-16'>Prestations de service</h1>
                <div className='grid grid-cols-2 w-full px-10 gap-10'>
                    <div>
                        <img className='w-full h-96 object-cover' src={photoVoitureNumero1} alt="Service 1" />
                        <h3 className='text-center pt-5 text-2xl'>Nettoyage intérieur</h3>
                        <p className='text-center text-xl pt-5'>Nettoyage intérieur: brillance impeccable, respect de l'environnement, satisfaction garantie.</p>
                        <div className='flex justify-center pt-10'>
                            <button onClick={handleNavigation} className='p-4 border w-1/2 bg-couleur-titre text
                   -black hover:bg-teal-600 hover:text-gray-200 transition duration-300 font-serif text-2xl'>
                                Plus d'informations
                            </button>
                        </div>
                    </div>
                    <div>
                        <img className='w-full h-96 object-cover' src={photoVoitureNumero2} alt="Service 2"/>
                        <h3 className='text-center pt-5 text-2xl'>Nettoyage extérieur</h3>
                        <p className='text-center text-xl pt-5'>Nettoyage extérieur: image professionnelle, techniques avancées, minimalement invasif.</p>
                        <div className='flex justify-center pt-10'>
                            <button onClick={handleNavigation} className='text-black p-4 border w-1/2 bg-couleur-titre font-serif text-2xl hover:bg-teal-600 hover:text-gray-200 transition duration-300'>
                                Plus d'informations
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Prestations;
