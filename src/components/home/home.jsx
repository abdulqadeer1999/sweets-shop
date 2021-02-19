import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Nav,FormControl,Navbar,Form,Carousel } from 'react-bootstrap';
// import {Link} from 'react'
import './home.css'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

// import Home from './components/home/home'
// import FormPage from  './components/home/form1/signup'
// import Login from './components/login/login'


// import Home from './form1/signup'
import FormPage from '../home/form1/signup'
import LogIn from '../login/login'

function Home () {
    


return (
    <div>
        <>
  <Navbar bg="dark" variant="dark">
    {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
   
    <img src = "https://www.brandcrowd.com/gallery/brands/pictures/picture14534934727973.jpg" width ="100px" height = "80px" alt="sweet logo" />
    <Router>
    <Nav className="mr-auto">
{/*     
      <Link className = "Nav_link1" to = "/signUp">SignUp</Link>
      <Link className = "Nav_link2" to = "/login">LogIn</Link> */}
      {/* <Link className = "Nav_link3" to = "/SignUp">Pricing</Link> */}
    </Nav>

    

 <Switch>

{/* 
<Route exact={true} path="/login">
  <LogIn />
</Route> */}

{/* 
<Route path="/signup">
  <SignUp />
</Route> */}


{/* 
<Route path="/">
  <FormPage />
</Route> */}





</Switch> 

</Router>

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