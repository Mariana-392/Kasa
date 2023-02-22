import './Carrousel.css'
import arrowleft from '../../assets/arrowleft.png'
import arrowright from '../../assets/arrowright.png'
import { useState } from 'react'

function Carrousel({pictures}) {

    const [isCurrent, setIsCurrent] = useState(0)
    //on récupère le nombre d'images
    const length = pictures.length

    // Si l'image actuelle est la dernière, on revient à la première, sinon on passe à l'image suivante
    const next = () => {
        setIsCurrent(isCurrent === length - 1 ? 0 : isCurrent + 1);
    }; 

    // Si l'image actuelle est la première, on revient à la dernière, sinon on passe à l'image précédente
    const previous = () => {
        setIsCurrent(isCurrent === 0 ? length - 1 : isCurrent - 1);
    };

    //Si on a un tableau vide, alors on ne retourne rien
    if (!Array.isArray(pictures) || length <= 0){
        return null
    }

    return(
        <div className='carrousel'>
            <div className="img_container">
                <img className='carrousel_img' src={pictures[isCurrent]} alt="photographie du logement" />
            </div>
            <div className='carrousel_arrow'>
                {length > 1  && ( 
                    //S'il y a plus d'une image alors on affiche les flèches de chaque côté
                <>
                <img src={arrowleft} alt="flèche précédente" onClick={previous} className='carrousel_previous'/>
                <img src={arrowright} alt="flèche suivante" onClick={next} className='carrousel_next'/>
                </>)}
            </div>
        </div>
    )
}

export default Carrousel