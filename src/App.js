import './Fichier.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


function App() {
  return (
    <>
    <div className="App">
    <Navbar expand="lg" className="bg-body-tertiary">
      <a href='https://mistore.com.tn/' title='xiaomi'>
        <img src='https://static.vecteezy.com/system/resources/thumbnails/019/909/578/small_2x/mi-xiaomi-transparent-mi-xiaomi-free-free-png.png' alt='xiaomi' width={60} height={60}/>
        </a>
      <Container>
        <Navbar.Brand href="https://mistore.com.tn/">Xiaomi Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://mistore.com.tn/">Boutique</Nav.Link>
            <Nav.Link href="https://mistore.com.tn/promotions/">Promotions</Nav.Link>
            <NavDropdown title="Smartphone" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://mistore.com.tn/product-category/xiaomi/">XIAOMI</NavDropdown.Item>
              <NavDropdown.Item href="https://mistore.com.tn/product-category/redmi-note/">
              Redmi Note
              </NavDropdown.Item>
              <NavDropdown.Item href="#actihttps://mistore.com.tn/product-category/smartphone-redmi/on/3.3">Redmi</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://mistore.com.tn/product-category/smartphone-poco/">
              POCO
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <CardGroup className='carte'>
      <Card  style={{textAlign: 'center',border: '5px solid green',marginRight:'10px'}}  >
        <Card.Img variant="top" src="https://i0.wp.com/www.trustedreviews.com/wp-content/uploads/sites/54/2023/04/Xiaomi-13-Ultra-vs-13-Pro-1-1024x576.jpg?resize=1024%2C576&ssl=1" width={150} height={300} />
        <Card.Body>
          <Card.Title style={{color:'blue'}}>Xiaomi ultra</Card.Title>
          <Card.Text>
          La marque estampillé Ultra à s'inviter sur le marché tunisien, le Xiaomi Ultra se veut sans compromis.
           Cette gamme de smartphone en forme de vitrine technologique,
           si elle ne peut prétendre remporter la palme du rapport qualité-prix, se classe dans la cour des grands.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Red card</small>
        </Card.Footer>
      </Card>
      <Card style={{textAlign: 'center',border: '5px solid green',marginRight:'10px'}}>
        <Card.Img variant="top" src="https://www.kibotek.com/wp-content/uploads/2021/09/kiboTEK_xiaomi_pad_5_128_001.jpg" width={150} height={300} />
        <Card.Body>
          <Card.Title style={{color:'blue'}}>xiaomi Pad</Card.Title>
          <Card.Text>
          Avec la Pad 6, Xiaomi renouvelle sa tablette tactile de milieu de gamme emblématique.
           La marque chinoise ambitionne un rapport qualité-prix convaincant à celles et ceux qui cherchent une tablette pour se divertir, 
          mais aussi travailler
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Black card</small>
        </Card.Footer>
      </Card>
      <Card style={{textAlign: 'center',border: '5px solid green',marginRight:'10px'}}>
        <Card.Img variant="top" src="https://vosveteit.zoznam.sk/wp-content/uploads/2023/05/ezgif.com-gif-maker-2023-05-09T120823.240.jpg" width={150} height={300}/>
        <Card.Body>
          <Card.Title style={{color:'blue'}}>Xiaomi Poco</Card.Title>
          <Card.Text>
          La gamme Poco Pro représente la gamme le plus haut de gamme de la filiale de Xiaomi. Comme ses prédécesseurs,
           il est avant tout destiné aux joueurs exigeants, en quête de performance.
            Il a également quelques autres atouts dans sa gibecière
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Blue card</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>


    </>
  );
}

export default App;
