

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

// import Home from './components/home/home'
import FormPage from  './components/home/form1/signup'
import LogIn from './components/login/login'

function App() {
  return (
    <div>


      
<Router>

<nav>
  <ol>
    <li>
      <Link to="/">login</Link>
    </li>
    <li>
      <Link to="/signup">Signup</Link>
    </li>
    {/* <li>
      <Link to="/dashboard">Dashboard</Link>
    </li> */}
    <li>
      <Link to="/reddit">Reddit</Link>
    </li>
  </ol>
</nav>


 <Switch>


  <Route exact={true} path="/signup">
    <FormPage />
  </Route>

{/* 
  <Route path="/dashboard">
    <Dashboard />
  </Route> */}


  <Route path="/">
    <LogIn />
  </Route>
  
  {/* <Route path="/reddit">
    <Reddit />
  </Route> */}



  

</Switch> 

</Router>




{/* <Home /> */}
{/* <FormPage /> 
<Login />  */}

    </div>
  );
}

export default App;
