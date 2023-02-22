import { useState } from 'react'
import arrowopen from '../../assets/arrowopen.svg'
import arrowclose from '../../assets/arrowclose.svg'
import './Collapse.css'

//composant pour les pages à propos et Location

function Collapse({title, text}) {
    const [isOpen, setIsOpen] = useState(false)

    //constante pour l'événement onClick qui permet ouverture/fermeture
    const openHandler = () =>{ setIsOpen((isOpen)=>!isOpen)}
    
    return(
            <article className='about_gallery_container'>
                <div className='about_container' onClick={openHandler}>
                    <h2 className='about_title'>{title}</h2>
                    {!isOpen ? 
                    <img className='about_img' src={arrowopen} alt="chevron" /> : 
                    <img className='about_img' src={arrowclose} alt="chevron" />
                    //Si c'est ouvert alors on affiche la flèche open sinon la flèche close
                    }
                </div>
                {isOpen && <p className='about_text'>{text}</p>
                //si c'est ouvert alors on affiche le texte
            }
            </article>
    )
}

export default Collapse