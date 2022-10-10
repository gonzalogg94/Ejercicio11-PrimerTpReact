import { Container } from "react-bootstrap";
import Titulo from "./components/Titulo";
import FormularioNoticias from "./components/FormularioNoticias"
import "./style.css"

function App() {
  
  return (
      <Container>
        <Titulo></Titulo>
        <FormularioNoticias></FormularioNoticias>
      </Container>
  );
}

export default App;
