import { Link } from 'react-router-dom'
import '../Card/Card.css'
import locations from '../../datas/locations.json'

function Card() {
    return(
        <section className='card_gallery_container'>
                {locations.map(({id, cover, title}) => (
                    <Link key={id} to={`/Location/${id}`} className='card'>
                        <img src={cover} className='card_img' alt="photographie $`{title}`"/>
                        <div className='card_title_container'>
                        <h2 className='card_title'>{title}</h2>
                        </div>
                    </Link>
                ))}
        </section>
    )
}

export default Card