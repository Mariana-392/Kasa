import './Lodging.css'
import fullStar from '../../assets/starfull.png'
import emptyStar from '../../assets/starempty.png'


function Lodging({title, location, tags, host, rating}) {

    //constante pour un tableau des notes, transforme la notation en nombre d'étoiles pleines
    const ratingStars = [1, 2, 3, 4, 5]

    return(
        <article className='lodginginfo_container'>
            <div className='lodging_info'>
                <h1 className='lodging_title'>{title}</h1>
                <h2 className='lodging_location'>{location}</h2>
                <div className='tag_container'>
                    {tags.map((tag) => (
                        <p className='lodging_tag'>{tag}</p>
                        //récupère la liste des tags avec la méthode .map()
                    ))}
                </div>

            </div>
            <div className='host'>
                <div className='host_info'>
                    <p className='host_name'>{host.name}</p>
                    <img className='host_img' src={host.picture} alt="photographie du host" />
                </div>
                <div className='stars_container'>
                    {ratingStars.map((ratingStar) =>(
                        rating >= ratingStar ? (
                            <img
                            key={ratingStar.toString()}
                            className="star"
                            src={fullStar}
                            alt="Etoile pleine"
                            />
                        ) : (
                            <img 
                            key={ratingStar.toString()}
                            className="star"
                            src={emptyStar}
                            alt="Etoile vide"
                            />
                        )
                        //récupère les notations pour chaque logements avec la methode .map()
                        //Si la notation est supérieur ou égale au tableau affiche étoile pleine correspondant
                        //autrement cela affiche étoile vide
                    ))}
                </div>
            </div>
        </article>
    )
}

export default Lodging