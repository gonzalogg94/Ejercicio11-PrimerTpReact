import { Container } from "react-bootstrap";
import Titulo from "./components/Titulo";
import FormularioNoticias from "./components/FormularioNoticias"
import ListaNoticias from "./components/ListaNoticias";

function App() {
  return (
      <Container>
        <Titulo></Titulo>
        <FormularioNoticias></FormularioNoticias>
        <ListaNoticias></ListaNoticias>
      </Container>
  );
}

export default App;
