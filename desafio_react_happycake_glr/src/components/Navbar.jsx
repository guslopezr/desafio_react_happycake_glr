import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { FaRegAddressBook } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";
import { GiStairsCake } from "react-icons/gi";
import { FaShoppingCart} from "react-icons/fa";



export default function Navigation() {
  return (
    <>
      <Navbar bg="danger" variant="danger">
        <Container className="d-flex flex-row space-between">
          {/* Links */}

          <div>
            <Link to="/Home" className="text-white ms-3 text-decoration-none">
              {" "}
              Principal &nbsp;
              <FaHome color="yellow" />
            </Link>

            <Link
              to="/Productos"
              className="text-white ms-3 text-decoration-none"
            >
              {" "}
              Productos &nbsp;
              <FaBirthdayCake />
            </Link>

            <Link
              to="/Contacto"
              className="text-white ms-3 text-decoration-none"
            >
              {" "}
              Contacto &nbsp;
              <FaRegAddressBook />
            </Link>

            <Link
              to="/NotFound"
              className="text-white ms-3 text-decoration-none"
            >
              {" "}
              Carro de compra &nbsp;
              <FaShoppingCart />
            </Link>


          </div>

          <div>
            <Navbar.Brand>Happy Cake</Navbar.Brand>
            <GiStairsCake size="25px" color="white" />
          </div>
        </Container>
      </Navbar>
    </>
  );
}
