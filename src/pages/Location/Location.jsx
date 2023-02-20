import '../../styles/main.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Carroussel from '../../components/Carroussel/Carroussel'
import Lodging from '../../components/Lodging/Lodging'
import Collapse from '../../components/Collapse/Collapse'
import Locationdata from '../../datas/locations.json'
import { useParams } from 'react-router-dom'
import Error from '../Error/Error'

function Location() {
    const params = useParams();
    //trouver le logement id correspondant sinon return page error
    const lodging = Locationdata.find((lodging) => params.id === lodging.id);
    if (lodging === undefined){
        return <Error />
    }

    const id = lodging.id;
    const pictures = lodging.pictures;
    const title = lodging.title;
    const location = lodging.location;
    const tags = lodging.tags;
    const host = lodging.host;
    const rating = lodging.rating;
    const description = lodging.description;
    const equipments = lodging.equipments;

    return(
        <>
            <div className='container'>
                <Header />  
                <main>
                    <Carroussel 
                    id={id}
                    pictures={pictures}
                    />
                    <Lodging 
                        id={id}
                        title={title}
                        location={location}
                        tags={tags}
                        host={host}
                        rating={rating}
                    />
                    <div className='collapse_row'>
                        <Collapse 
                            title="Description"
                            text={description}
                        />    
                        <Collapse 
                            title="Equipements"
                            text={equipments.map((equipment, index)=>(
                                <li key={index} className='equipment_list'>{equipment}</li>
                            ))}
                        />        
                    </div>
                </main>
                </div>
            <Footer />
        </>
    )
}

export default Location