
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import React, { useState } from "react";
import axios from 'axios'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import {
  useHistory
} from "react-router-dom"
import { useGlobalState, useGlobalStateUpdate } from '../../context/GlobalContext';



const Login = () => {

  let url = "http://localhost:5000"
  let [show,setShow] = useState()
  let history = useHistory()
  const globalState = useGlobalState()
  const setGlobalState = useGlobalStateUpdate()

  function login(e) {
e.preventDefault();
axios({
  method : "post",
  url : url + "/login",
  data : {
    email : document.getElementById('email1').value,
    password : document.getElementById("pass1").value,
  },
  withCredentials : true
}).then ((response) => {
  if(response.data.status === 200){
    setGlobalState(prev => ({
      ...prev,
      loginStatus : true,
      user : response.data.user,
      roll : "user"
    }))
  } else {
    history.push("/login");
    setShow(response.data.message)
  }
}).catch((error) => {
  console.log(error);
});
  }

  function forget() {
    history.push("/forgetpass")
  }


    return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form onSubmit = {login}>
            <p className="h5 text-center mb-4">Login</p>
            <div className="grey-text">
              
              <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
                success="right" id = "email2" />

<MDBInput label="Your password" icon="lock" group type="password" validate id = "pass2" />
            
            </div>
            <div className="text-center">
              <MDBBtn color="primary">Login</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    );
    };
    
    export default Login;