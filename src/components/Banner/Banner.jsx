import homebanner from '../../assets/homebanner.png'
import '../Banner/Banner.css'

function Banner() {
    return (
        <div className="banner">
            <p>Chez vous, partout et ailleurs</p>
            <img src={homebanner} alt="Bannière de la page d'accueil"/>
        </div>
    )
}

export default Banner