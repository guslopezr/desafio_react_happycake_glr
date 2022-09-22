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
                <Card.Title>Torta Panqueque Naranja</Card.Title>
                <Card.Text>
                  <p> $25.000 </p>
                </Card.Text>
                <Button variant="danger">Consultar</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem", margin: "15px" }}>
              <Card.Img
                variant="top"
                src="https://i.pinimg.com/564x/91/7b/95/917b959c21593f07af290f9684bd3cab.jpg"
              />
              <Card.Body>
                <Card.Title>Pastel torre de cremas y frutilla</Card.Title>
                <Card.Text>
                  <p> $35.000 </p>
                </Card.Text>
                <Button variant="danger">Consultar</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem", margin: "15px" }}>
              <Card.Img
                variant="top"
                src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F05%2F25%2F6665215-black-forest-cake-Kim-1x1-2.jpg"
              />
              <Card.Body>
                <Card.Title>Selva Negra</Card.Title>
                <Card.Text>
                  <p> $29.000 </p>
                </Card.Text>
                <Button variant="danger">Consultar</Button>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Brownies y Cupcakes</Accordion.Header>
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
                src="https://i.pinimg.com/236x/c5/bf/96/c5bf96426f78d2729132ca021ebcbebb.jpg"
              />
              <Card.Body>
                <Card.Title>Cupcake de frutilla</Card.Title>
                <Card.Text>
                  <p> $3.000 </p>
                </Card.Text>
                <Button variant="danger">Consultar</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem", margin: "15px" }}>
              <Card.Img
                variant="top"
                src="https://natashaskitchen.com/wp-content/uploads/2020/05/Vanilla-Cupcakes-3.jpg"
              />
              <Card.Body>
                <Card.Title>Cupcake de vainilla</Card.Title>
                <Card.Text>
                  <p> $3.000 </p>
                </Card.Text>
                <Button variant="danger">Consultar</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem", margin: "15px" }}>
              <Card.Img
                variant="top"
                src="https://www.shugarysweets.com/wp-content/uploads/2021/02/walnut-brownies-thick.jpg"
              />
              <Card.Body>
                <Card.Title>Browie de Nueces</Card.Title>
                <Card.Text>
                  <p> $3.000 </p>
                </Card.Text>
                <Button variant="danger">Consultar</Button>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Galletas especiales</Accordion.Header>
          <Accordion.Body className="d-flex flex-row">
            <Card style={{ width: "18rem", margin: "15px" }}>
              <Card.Img
                variant="top"
                src="https://i.pinimg.com/564x/b1/75/fc/b175fc9bc25ca6b9d2f630875645cdd3.jpg"
              />
              <Card.Body>
                <Card.Title>Galletas de Chocolate</Card.Title>
                <Card.Text>
                  <p> $3.000 los 100 gramos</p>
                </Card.Text>
                <Button variant="danger">Consultar</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem", margin: "15px" }}>
              <Card.Img
                variant="top"
                src="https://i.pinimg.com/236x/ba/27/95/ba2795a4d28ecfa9ad9c660376aa715b.jpg"
              />
              <Card.Body>
                <Card.Title>Galletas con chispas de colores</Card.Title>
                <Card.Text>
                  <p> $4.000 por 100 gramos </p>
                </Card.Text>
                <Button variant="danger">Consultar</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem", margin: "15px" }}>
              <Card.Img
                variant="top"
                src="https://i.pinimg.com/236x/b9/f4/e1/b9f4e155cbd9f8cf1cddb269c0f405cb.jpg"
              />
              <Card.Body>
                <Card.Title>"Delicias": Galletas con relleno de mermelada</Card.Title>
                <Card.Text>
                  <p> $3.000 los 100 gramos </p>
                </Card.Text>
                <Button variant="danger">Consultar</Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem", margin: "15px" }}>
              <Card.Img
                variant="top"
                src="https://pinchandswirl.com/wp-content/uploads/2018/12/Butter-Cookies-stacked-on-a-marble-slab.jpg"
              />
              <Card.Body>
                <Card.Title>Galletas de mantequilla</Card.Title>
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
