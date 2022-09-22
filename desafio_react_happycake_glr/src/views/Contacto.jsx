import { Container } from "react-bootstrap";

import Contacto from "../components/Contacto";

export default () => {
  return (
    <Container className="pt-5 d-flex flex-column align-items-center justify-content-center"  >

      <h1  className="mb-4">Cuéntanos: ¿En qué te podemos ayudar?</h1>
      <Contacto />
    </Container>
  );
};
