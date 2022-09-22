import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Figure from "react-bootstrap/Figure";
import { MdConstruction } from "react-icons/md";
import Button from "react-bootstrap/Button";

export default () => {
  return (
    <Container className="pt-5 d-flex flex-column align-items-center justify-content-center">
      <h1 className="mb-4">Lo sentimos, esta página está en construcción. </h1>

      <Figure>
        <MdConstruction size="400px" color="Orange" />
        <Figure.Caption></Figure.Caption>
      </Figure>


      <Link 
      to="/Home">
        <Button variant="danger">Volver a menú principal</Button>
      </Link>

    </Container>
  );
};
