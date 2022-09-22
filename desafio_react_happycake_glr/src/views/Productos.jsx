import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { GiStairsCake } from "react-icons/gi";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default () => {
  return (
    <Container className="pt-5">
      <h1 className="mb-4">Nuestros Productos</h1>

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Pasteles</Accordion.Header>
          <Accordion.Body className="d-flex flex-row">
            <Card style={{ width: "18rem", margin: "15px" }}>
              <Card.Img
                variant="top"
                src="https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg"
              />
              <Card.Body>
                <Card.Title>Pastel de Cumpleaños</Card.Title>
                <Card.Text>
                  <p> $20.000 </p>
                </Card.Text>
                <Button variant="danger">Consultar</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem", margin: "15px" }}>
              <Card.Img
                variant="top"
                src="https://jumbo.vtexassets.com/arquivos/ids/290949/Torta-Panqueque-naranja-Jumbo-1-unid-1-47474290.jpg?v=636855829210470000"
              />
              <Card.Body>
                <Card.Title>Panqueque Naranja</Card.Title>
                <Card.Text>
                  <p> $25.000 </p>
                </Card.Text>
                <Button variant="danger">Consultar</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem", margin: "15px" }}>
              <Card.Img
                variant="top"
                src="https://jumbo.vtexassets.com/arquivos/ids/290949/Torta-Panqueque-naranja-Jumbo-1-unid-1-47474290.jpg?v=636855829210470000"
              />
              <Card.Body>
                <Card.Title>Panqueque Naranja</Card.Title>
                <Card.Text>
                  <p> $25.000 </p>
                </Card.Text>
                <Button variant="danger">Consultar</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem", margin: "15px" }}>
              <Card.Img
                variant="top"
                src="https://jumbo.vtexassets.com/arquivos/ids/290949/Torta-Panqueque-naranja-Jumbo-1-unid-1-47474290.jpg?v=636855829210470000"
              />
              <Card.Body>
                <Card.Title>Panqueque Naranja</Card.Title>
                <Card.Text>
                  <p> $25.000 </p>
                </Card.Text>
                <Button variant="danger">Consultar</Button>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Brownies</Accordion.Header>
          <Accordion.Body className="d-flex flex-row">
            <Card style={{ width: "18rem", margin: "15px" }}>
              <Card.Img
                variant="top"
                src="https://www.spendwithpennies.com/wp-content/uploads/2022/03/Homemade-Brownies.jpeg"
              />
              <Card.Body>
                <Card.Title>Browie de Chocolate</Card.Title>
                <Card.Text>
                  <p> $3.000 </p>
                </Card.Text>
                <Button variant="danger">Consultar</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem", margin: "15px" }}>
              <Card.Img
                variant="top"
                src="https://www.spendwithpennies.com/wp-content/uploads/2022/03/Homemade-Brownies.jpeg"
              />
              <Card.Body>
                <Card.Title>Browie de Chocolate</Card.Title>
                <Card.Text>
                  <p> $3.000 </p>
                </Card.Text>
                <Button variant="danger">Consultar</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem", margin: "15px" }}>
              <Card.Img
                variant="top"
                src="https://www.spendwithpennies.com/wp-content/uploads/2022/03/Homemade-Brownies.jpeg"
              />
              <Card.Body>
                <Card.Title>Browie de Chocolate</Card.Title>
                <Card.Text>
                  <p> $3.000 </p>
                </Card.Text>
                <Button variant="danger">Consultar</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem", margin: "15px" }}>
              <Card.Img
                variant="top"
                src="https://www.spendwithpennies.com/wp-content/uploads/2022/03/Homemade-Brownies.jpeg"
              />
              <Card.Body>
                <Card.Title>Browie de Chocolate</Card.Title>
                <Card.Text>
                  <p> $3.000 </p>
                </Card.Text>
                <Button variant="danger">Consultar</Button>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Dulces</Accordion.Header>
          <Accordion.Body className="d-flex flex-row">
            <Card style={{ width: "18rem", margin: "15px" }}>
              <Card.Img
                variant="top"
                src="https://www.spendwithpennies.com/wp-content/uploads/2022/03/Homemade-Brownies.jpeg"
              />
              <Card.Body>
                <Card.Title>Browie de Chocolate</Card.Title>
                <Card.Text>
                  <p> $3.000 </p>
                </Card.Text>
                <Button variant="danger">Consultar</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem", margin: "15px" }}>
              <Card.Img
                variant="top"
                src="https://www.spendwithpennies.com/wp-content/uploads/2022/03/Homemade-Brownies.jpeg"
              />
              <Card.Body>
                <Card.Title>Browie de Chocolate</Card.Title>
                <Card.Text>
                  <p> $3.000 </p>
                </Card.Text>
                <Button variant="danger">Consultar</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem", margin: "15px" }}>
              <Card.Img
                variant="top"
                src="https://www.spendwithpennies.com/wp-content/uploads/2022/03/Homemade-Brownies.jpeg"
              />
              <Card.Body>
                <Card.Title>Browie de Chocolate</Card.Title>
                <Card.Text>
                  <p> $3.000 </p>
                </Card.Text>
                <Button variant="danger">Consultar</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem", margin: "15px" }}>
              <Card.Img
                variant="top"
                src="https://www.spendwithpennies.com/wp-content/uploads/2022/03/Homemade-Brownies.jpeg"
              />
              <Card.Body>
                <Card.Title>Browie de Chocolate</Card.Title>
                <Card.Text>
                  <p> $3.000 </p>
                </Card.Text>
                <Button variant="danger">Consultar</Button>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};
