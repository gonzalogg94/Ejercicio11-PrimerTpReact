
import {Form,Button, Container} from "react-bootstrap"
import { useEffect,useState } from "react";
import ListaNoticias from "./ListaNoticias";

const FormularioNoticias = () => {
  const [noticias, setNoticias] = useState([]);
useEffect(()=>{
  consultarAPI();
},[])

const consultarAPI=async()=>{
  try{
    const respuesta= await fetch('https://newsdata.io/api/1/news?country=ar&apikey=pub_121255cebe5af61129044085f56a740b5796b')
    const dato= await respuesta.json();
    console.log(dato.results);
    setNoticias(dato.results);
  }catch (error) {}
}
    return (
      <Container>
        <Form>
        <Form.Group className="mb-3 d-lg-flex d-md-flex">
          <Form.Label htmlFor="disabledSelect">Buscar por categoria</Form.Label>
          <Form.Select id="disabledSelect">
            <option>Negocios</option>
            <option>Entretenimiento</option>
            <option>Medio Ambiente</option>
            <option>Gastronomia</option>
            <option>Salud</option>
            <option>Politica</option>
            <option>Ciencia</option>
            <option>Deportes</option>
            <option>Tecnologia</option>
            <option>Parte Superior</option>
            <option>Mundo</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit">Mostrar Noticias</Button>
    </Form>
    <ListaNoticias noticias={noticias}></ListaNoticias>
      </Container>
    );
};

export default FormularioNoticias;