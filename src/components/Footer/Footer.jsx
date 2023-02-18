import logo2 from '../../assets/logo2.png';
import '../Footer/Footer.css'

function Footer() {
    return (
        <footer>
            <div className='footer_container'>
                <img src={logo2} alt="Logo"/>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>

    )
}

export default Footer