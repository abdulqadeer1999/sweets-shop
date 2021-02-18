import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Nav,FormControl,Navbar,Form,Carousel } from 'react-bootstrap';
import './home.css'




function Home () {
    


return (
    <div>
        <>
  <Navbar bg="dark" variant="dark">
    {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
   
    <img src = "https://www.brandcrowd.com/gallery/brands/pictures/picture14534934727973.jpg" width ="100px" height = "80px" alt="sweet logo" />
  
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>

  <br />
 
</>

<Form />
    </div>



)}

export default Home ;