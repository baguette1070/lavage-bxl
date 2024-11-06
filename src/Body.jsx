import photoVoiture from "./assets/martin-katler-S0q7CvqX6O4-unsplash.jpg";

function Body(){



    return(<>
        <div className='relative w-full taille-box-voiture overflow-hidden opacity-90'>
            <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50'>
                <p className='text-white text-4xl  p-4 rounded'>Des voitures étincelantes à petits
                    prix à Bruxelles !</p>
            </div>
            <img src={photoVoiture} alt="Voiture" className='w-full h-full object-cover'/>
        </div>
    </>);
}

export default Body