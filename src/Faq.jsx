import { useState } from "react";

function Faq() {
    const [visibleAnswer, setVisibleAnswer] = useState(null);

    const toggleAnswer = (index) => {
        setVisibleAnswer(visibleAnswer === index ? null : index);
    };

    return (
        <div className='pt-16 taille-distance-faq-contact'>
            <div className={''}>
                <div id='roadToFaq' className='h-7'></div>
                <h1 className='text-couleur-titre text-center font-serif text-4xl'>Foire aux questions</h1>

                {/* Premier élément de FAQ */}
                <div className={'text-center w-full pt-16 flex justify-center '}>
                    <div className='w-1/2 text-xl border-white  border-2'>
                        <div className="">
                            <div
                                className="bg-couleur-titre text-couleur-hover-button p-4 cursor-pointer transform transition duration-300"
                                onClick={() => toggleAnswer(0)}
                            >
                                <h3 className={'text-white'}>Quels types de voitures nettoyez-vous?</h3>
                                <hr/>
                            </div>
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${visibleAnswer === 0 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="bg-gray-100 p-4">
                                    <p>Nous nettoyons tous les types de voitures, y compris les anciennes et celles qui ne sont plus en mesure de rouler.</p>
                                </div>
                            </div>
                        </div>

                        {/* Deuxième élément de FAQ */}
                        <div className="">
                            <div
                                className="bg-couleur-titre text-white p-4 cursor-pointer transform transition duration-300"
                                onClick={() => toggleAnswer(1)}
                            >
                                <h3>Utilisez-vous des produits écologiques?</h3>
                                <hr/>
                            </div>
                            <div
                                className={`overflow-hidden transition-all duration-500 ${visibleAnswer === 1 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="bg-gray-100 p-4">
                                    <p>Oui, nous utilisons des produits respectueux de l'environnement pour garantir la sécurité et la santé de nos clients.</p>
                                </div>
                            </div>
                        </div>

                        {/* Troisième élément de FAQ */}
                        <div className="">
                            <div
                                className="bg-couleur-titre text-white p-4 cursor-pointer transform transition duration-300"
                                onClick={() => toggleAnswer(2)}
                            >
                                <h3>Comment planifier un rendez-vous?</h3>
                                <hr/>
                            </div>
                            <div
                                className={`overflow-hidden transition-all duration-500 ${visibleAnswer === 2 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="bg-gray-100 p-4">
                                    <p>Vous pouvez planifier un rendez-vous en utilisant notre formulaire en ligne ou nous contacter sur les réseaux ci-dessous.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq;
