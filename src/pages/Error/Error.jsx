//import des components nécéssaires pour la page Error
import '../../styles/main.css'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'
import ErrorContent from '../../components/ErrorContent/ErrorContent'

function Error() {
    return (
        <>
            <div className='container'>
                <Header />  
                <main>
                    <ErrorContent />
                </main>
            </div>
            <Footer />
        </>
    );
}

export default Error;