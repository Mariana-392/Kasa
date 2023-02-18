import { useState } from 'react'
import arrowopen from '../../assets/arrowopen.svg'
import arrowclose from '../../assets/arrowclose.svg'
import './Collapse.css'

function Collapse({title, text}) {
    const [isOpen, setIsOpen] = useState(false)
    const openHandler = () =>{ setIsOpen((isOpen)=>!isOpen)}

    return(
            <article className='about_gallery_container'>
                <div className='about_container' onClick={openHandler}>
                    <h2 className='about_title'>{title}</h2>
                    {!isOpen ? 
                    <img className='about_img' src={arrowopen} alt="chevron" /> : 
                    <img className='about_img' src={arrowclose} alt="chevron" />
                    }
                </div>
                {isOpen && <p className='about_text'>{text}</p>}
            </article>
    )
}

export default Collapse