import { Container } from "react-bootstrap";
import Titulo from "./components/Titulo";
import FormularioNoticias from "./components/FormularioNoticias"
import ListaNoticias from "./components/ListaNoticias";
import { useEffect,useState } from "react";

function App() {
  const [noticia, setNoticia] = useState([]);
useEffect(()=>{
  consultarAPI();
},[])

const consultarAPI=async()=>{
const respuesta= await fetch('https://newsdata.io/api/1/news?country=ar&apikey=pub_121255cebe5af61129044085f56a740b5796b')
console.log(respuesta)
}


  return (
      <Container>
        <Titulo></Titulo>
        <FormularioNoticias></FormularioNoticias>
        <ListaNoticias></ListaNoticias>
      </Container>
  );
}

export default App;
