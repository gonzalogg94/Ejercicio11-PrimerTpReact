import { Form, Button, Container } from "react-bootstrap";
import { useState } from "react";
import ListaNoticias from "./ListaNoticias";

const FormularioNoticias = () => {
  const [noticias, setNoticias] = useState([]);
  const [categoria, setCategoria] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    consultarAPI();
  };

  const consultarAPI = async () => {
    try {
      const respuesta = await fetch(
        `https://newsdata.io/api/1/news?country=ar&apikey=pub_121255cebe5af61129044085f56a740b5796b&category=${categoria}`
      );
      const dato = await respuesta.json();
      console.log(dato.results);
      setNoticias(dato.results);
    } catch (error) {}
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-lg-flex d-md-flex">
          <Form.Label htmlFor="disabledSelect">Buscar por categoria</Form.Label>
          <Form.Select
            aria-label="categoria"
            onChange={(e) => setCategoria(e.target.value)}
            value={categoria}
            required
          >
            <option>Categorias</option>
            <option value="business">Negocios</option>
            <option value="entertainment">Entretenimiento</option>
            <option value="environment">Medio Ambiente</option>
            <option value="food">Gastronomia</option>
            <option value="health">Salud</option>
            <option value="politics">Politica</option>
            <option value="science">Ciencia</option>
            <option value="sports">Deportes</option>
            <option value="technology">Tecnologia</option>
            <option value="top">Top</option>
            <option value="world">Mundo</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit">Mostrar Noticias</Button>
      </Form>
      <ListaNoticias noticias={noticias}></ListaNoticias>
    </Container>
  );
};

export default FormularioNoticias;
