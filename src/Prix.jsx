import Header from './Header.jsx'
import photoInterieur from './assets/oliur-ovrOPhu8vSw-unsplash.jpg';
import photoExterieur from './assets/eyosias-g-Yi5Bt8HUQtI-unsplash.jpg';



function Prix(){

    return(<>
        <>
            <Header></Header>

            <div className='flex justify-center pt-10'>
                <div className=' grid grid-cols-2 w-1/2 gap-10' >
                    <p className='text-couleur-titre font-bold text-2xl'>Prix intérieur</p>
                    <p className='text-couleur-titre font-bold text-2xl'>Prix extérieur</p>
                    <p>30 €</p>
                    <p className=''>30 €</p>
                    <img className='rounded-2xl h-full' src={photoInterieur} alt="" />
                    <img className='rounded-2xl h-full' src={photoExterieur} alt="" />
                </div>
            </div>
        </>


    </>);

}


export default Prix;