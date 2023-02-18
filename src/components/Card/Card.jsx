import { Link } from 'react-router-dom'
import '../Card/Card.css'
import locations from '../../datas/locations.json'

function Card() {
    return(
        <section className='card_gallery_container'>
            <ul className='card_gallery'>
                {locations.map(({id, cover, title}) => (
                    <Link to={locations.id}>
                        <div className='card'>
                            <li key={id} className='card_container'>
                                <img src={cover} className='card_img' alt='photographie {title}'/>
                                <h2 className='card_title'>{title}</h2>
                            </li>
                        </div>
                    </Link>
                ))}
            </ul>
        </section>
    )
}

export default Card