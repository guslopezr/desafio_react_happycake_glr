//import { Accordion } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { InputGroup } from "react-bootstrap";

export default function Navigation() {
  return (
   

<Form    >
      <Form.Group  style={{ width: "30rem", margin: "15px" }} className="mb-3 flex-columns p-1 .justify-content-center"  controlId="formBasicEmail">
        <Form.Label>Correo Electrónico</Form.Label>
        <Form.Control type="email" placeholder="Ingresa correo electrónico" />
        <Form.Text className="text-muted">
          No compartiremos tus datos con terceros.
        </Form.Text>
      </Form.Group>

      <InputGroup style={{ width: "60rem", margin: "15px", height:"300px" }}  >
        <InputGroup.Text   >Envía tu consulta</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup>      
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Revisar antes de enviar   " />
      </Form.Group>
      <Button variant="danger" type="submit">
        Enviar formulario
      </Button>
    </Form>


  );
}
