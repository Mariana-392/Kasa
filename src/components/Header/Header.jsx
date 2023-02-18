import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'
import '../Header/Header.css'

function Header() {
    return (
        <header>
            <img className='header_logo' src={logo} alt="Logo"/>
            <nav className='header_nav'>
                <Link to="/">Accueil</Link>
                <Link to="/about">À Propos</Link>
            </nav>
        </header>

    )
}

export default Header