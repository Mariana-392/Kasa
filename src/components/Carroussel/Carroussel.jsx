import './Carroussel.css'
import arrowleft from '../../assets/arrowleft.png'
import arrowright from '../../assets/arrowright.png'
import { useState } from 'react'

function Carroussel({pictures}) {

    const [isCurrent, setIsCurrent] = useState(0)
    const length = pictures.length

    const next = () => {
        setIsCurrent(isCurrent === length - 1 ? 0 : isCurrent + 1);
    }; // Si l'image actuelle est la dernière, on revient à la première, sinon on passe à l'image suivante

    const previous = () => {
        setIsCurrent(isCurrent === 0 ? length - 1 : isCurrent - 1);
    };

    if (!Array.isArray(pictures) || length <= 0){
        return null
    }

    return(
        <div className='carroussel'>
            <div className="img_container">
                <img className='carroussel_img' src={pictures[isCurrent]} alt="photographie du logement" />
            </div>
            <div className='carroussel_arrow'>
                {length > 1  && ( 
                <>
                <img src={arrowleft} alt="flèche précédente" onClick={previous} className='carroussel_previous'/>
                <img src={arrowright} alt="flèche suivante" onClick={next} className='carroussel_next'/>
                </>)}
            </div>
        </div>
    )
}

export default Carroussel