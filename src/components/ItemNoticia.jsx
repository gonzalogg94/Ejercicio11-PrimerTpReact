
import {Card,Button, Col} from "react-bootstrap"


const ItemNoticia = () => {
    return (
        <Col sm={12} md={6} lg={4}>
        <Card>
      <Card.Img variant="top" src="https://ichef.bbci.co.uk/news/640/cpsprodpb/FEB5/production/_97750256_gettyimages-845340462.jpg" />
      <Card.Body>
        <Card.Title>Titulo noticia</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Subtitulo</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="danger">Ver mas</Button>
      </Card.Body>
    </Card>
        </Col>
    );
};

export default ItemNoticia;