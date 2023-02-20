import './ErrorContent.css'
import {Link} from 'react-router-dom'

function ErrorContent() {
    return(
        <div className='error_content'>
        <h1 className='error_title'>404</h1>
        <h2 className='error_text'>Oups! La page que vous demandez n'existe pas.</h2>
        <Link to="/"  className='error_linkhome'> <p>Retourner sur la page d’accueil</p></Link>
    </div>
    )
}

export default ErrorContent