
import { Row } from 'react-bootstrap';
import ItemNoticia from './ItemNoticia';


const ListaNoticias = ({noticias}) => {
    return (
        <Row className='pt-5'>
            {noticias.map((noticia, posicion)=>(<ItemNoticia key={posicion} noticia={noticia}></ItemNoticia>))}
        </Row>
            
        
    );
};

export default ListaNoticias;