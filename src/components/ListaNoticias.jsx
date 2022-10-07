
import { Row } from 'react-bootstrap';
import ItemNoticia from './ItemNoticia';

const ListaNoticias = () => {
    return (
        <Row className='pt-5'>
            <h1 className='text-center display-4'>Esta es la lista noticias</h1>
<ItemNoticia></ItemNoticia>
        </Row>
            
        
    );
};

export default ListaNoticias;