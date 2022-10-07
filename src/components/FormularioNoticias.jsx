import React from 'react';
import {Form,Button} from "react-bootstrap"

const FormularioNoticias = () => {
    return (
        <Form>
        <Form.Group className="mb-3 d-lg-flex d-md-flex">
          <Form.Label htmlFor="disabledSelect">Buscar por categoria</Form.Label>
          <Form.Select id="disabledSelect">
            <option>Categoria 1</option>
            <option>Categoria 2</option>
            <option>Categoria 3</option>
            <option>Categoria 4</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit">Mostrar Noticias</Button>
    </Form>
    );
};

export default FormularioNoticias;