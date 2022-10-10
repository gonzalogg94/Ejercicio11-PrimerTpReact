
import {Card,Button, Col} from "react-bootstrap"


const ItemNoticia = ({noticia}) => {
    return (
        <Col sm={12} md={6} lg={4}>
        <Card>
      <Card.Img variant="top" src={noticia.image_url} />
      <Card.Body>
        <Card.Title>{noticia.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{noticia.category}</Card.Subtitle>
        <Card.Text>
          {noticia.content}
        </Card.Text>
        <a href={noticia.link}>
        <Button variant="danger">Ver mas</Button>
        </a>
      </Card.Body>
    </Card>
        </Col>
    );
};

export default ItemNoticia;