import React, { useState } from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

function Contact() {
    // Correction pour l'icône de Leaflet
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    });

    // États pour stocker les valeurs des champs de formulaire
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [formMessage, setFormMessage] = useState('');

    // Fonction pour gérer la soumission du formulaire
    const handleSubmit = async (event) => {
        event.preventDefault();  // Empêche le rechargement de la page

        const formData = {
            name: name,
            email: email,
            message: message
        };

        try {
            const response = await fetch('http://localhost:3001', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',  // Définir le type de contenu à JSON
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorDetails = await response.text();
                setFormMessage(`Erreur : ${response.status} - ${errorDetails}`);
            } else {
                alert('Données envoyées avec succès !');
            }
        } catch (error) {
            setFormMessage('Erreur : une erreur est survenue.');
        }
    };

    return (
        <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto p-6">
            <div className="w-full md:w-1/2 pr-6" id={"roadToContact"}>
                <h1 className="text-couleur-titre text-4xl mb-4">Contactez-nous</h1>
                <p className="text-xl text-gray-600 mb-6">
                    Contactez-nous pour un devis gratuit et personnalisé.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="nom" className="block text-gray-700 font-bold mb-2">Nom *</label>
                        <input
                            type="text"
                            id="nom"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded bg-gray-200"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Adresse e-mail *</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded bg-gray-200"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message *</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows="4"
                            className="w-full p-2 border border-gray-300 rounded bg-gray-200"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="bg-teal-500 text-black text-opacity-80 px-4 py-2 font-bold rounded hover:bg-teal-600 hover:text-gray-200 transition duration-300">
                        ENVOYER LE FORMULAIRE
                    </button>
                    {/* Message après soumission du formulaire */}
                    {formMessage && <p className="text- text-xl mt-4">{formMessage}</p>}
                </form>
            </div>
            <div className="w-full md:w-1/2 mt-6 md:mt-0">
                <div className="h-64 bg-gray-300 mb-4">
                    <div className={"w-full h-full"}>
                        <MapContainer
                            center={[50.8503, 4.3517]} // Coordonnées de Bruxelles
                            zoom={13}
                            className="h-full w-full"
                            scrollWheelZoom={false}
                            zoomControl={true}
                        >
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker position={[50.840, 4.329]}>
                                <Popup>Nous sommes ici !</Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
                <h2 className="text-xl font-semibold mb-2">Localisation</h2>
                <p className="flex items-center text-gray-600 mb-4">
                    Lavage-Auto, Bruxelles, Belgique
                </p>
                <div className="flex space-x-4">
                    <a href="#" className="text-teal-500 hover:text-teal-600"><Facebook size={24} /></a>
                    <a href="https://www.instagram.com/lavage_autobxl/" target='_blank' className="text-teal-500 hover:text-teal-600"><Instagram size={24} /></a>
                    {/* Lien personnalisé ou autre icône */}
                </div>
            </div>
        </div>
    );
}

export default Contact;
