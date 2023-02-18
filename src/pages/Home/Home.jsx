import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'
import '../../styles/main.css'

function Home() {
  return (
      <>
        <div className='container'>
          <Header />  
          <main>
            <Banner />
            <Card />
          </main>
        </div>
        <Footer />
      </>
  );
}

export default Home;