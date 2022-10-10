import React from 'react';
import {Form,Button} from "react-bootstrap"

const FormularioNoticias = () => {
    return (
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
    );
};

export default FormularioNoticias;