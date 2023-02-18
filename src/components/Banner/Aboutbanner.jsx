import aboutbanner from '../../assets/aboutbanner.png'

import '../Banner/Banner.css'

function Banner() {
    return (
        <div className="banner">
            <img src={aboutbanner} alt="Bannière de la page À propos"/>
        </div>
    )
}

export default Banner