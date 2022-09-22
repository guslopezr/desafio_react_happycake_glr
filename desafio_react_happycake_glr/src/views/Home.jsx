import { Container } from "react-bootstrap";
//import { FaBeer } from 'react-icons/fa';
//import { BiCake } from 'react-icons/bi';
import { GiStairsCake } from 'react-icons/gi';



export default () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5">
        Bienvenido a <span className="fw-bold">Happy Cake</span> 

      </h1>
      <h6> El lugar de los pasteles felices </h6>

      <  GiStairsCake size = '400px' color="orange" />

    </Container>
  );
};
