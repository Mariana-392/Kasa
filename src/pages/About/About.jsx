import '../../styles/main.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Aboutbanner from '../../components/Aboutbanner/Aboutbanner'
import Collapse from '../../components/Collapse/Collapse'
import Aboutdata from '../../datas/about.json'

function About() {
    return (
        <>
            <div className='container'>
                <Header />  
                <main>
                    <Aboutbanner />
                        <section className='about_section'>
                            {Aboutdata.map((content, index)=>(
                                <div key={index}>
                                    <Collapse 
                                    title={content.title}
                                    text={content.text}
                                    />
                                </div>
                            ))}
                        </section>
                </main>
            </div>
            <Footer />
        </>
    );
}

export default About