import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import React, { useState } from "react";
import { useGlobalState, useGlobalStateUpdate } from "./../../../context/GlobalContext"
import axios from "axios";
import { Link } from "react-router-dom";
import { baseUrl } from '../../../core/index'
import {
  useHistory
} from 'react-router-dom';

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';



  // const globalState = useGlobalState()
  // const setGlobalState = useGlobalStateUpdate()



  function SignUp() {
    
  
     let url = 'http://localhost:5000'
      let [change,setChange] = useState(true)
      let [show , setShow] = useState()

      let history = useHistory()
      function handleClick() {
        history.push("/login")
      }

function signUp(e) {
  e.preventDefault()

  let name = document.getElementById("name1").value
  let email = document.getElementById("email1").value
  let password = document.getElementById("pass1").value

  let newdata = {
    name:name,
    email:email,
    password :password
  }
  axios ({
    method : "post",
    url:url + "/signup",
    data : newdata,
    withCredentials : true
  }).then ((response) => {
    if(response.data.status === 200) {
      setChange(false)
    }

    else {
      history.push("/signup")
      setShow(response.data.message)
    }
  }).catch ((error) => {
    console.log(error)
  });
}

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form onSubmit={signUp} >
            <p className="h5 text-center mb-4">Sign up</p>
            <div className="grey-text">
              <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
                success="right" id="name1" />
              <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
                success="right" id="email1" />
              <MDBInput label="Your password" icon="lock" group type="password" validate id="pass1" />
            </div>
            <div className="text-center">
              <MDBBtn color="primary">Register</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );



};

export default SignUp