import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import React from "react";
import { useGlobalState, useGlobalStateUpdate } from "./../../../context/GlobalContext"
import axios from "axios";
import { Link } from "react-router-dom";
import {baseUrl} from '../../../core/index'

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
function FormPage() {
   

  const globalState = useGlobalState()
  const setGlobalState = useGlobalStateUpdate()



  function handleSignUp(e) {
    e.preventDefault()
    axios({
        url: baseUrl + "/signup",
        method: "POST",
        data: {
          "name" : document.getElementById("name1").value,
            "email": document.getElementById("email1").value,
            "password": document.getElementById("pass1").value,
        },
        withCredentials: true
    }).then(function (response) {
        console.log("response: ", response.data);

        setGlobalState(prev => {
            return { ...prev, loginStatus: true }
        })

    }).catch(function (error) {
        // handle error
        console.log("error: ==== ", error);
        if (error && error.response && error.response.status) {
            console.log("error ==============> ", error.response.status);
        }

    })
}
return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form onSubmit = {handleSignUp} >
        <p className="h5 text-center mb-4">Sign up</p>
        <div className="grey-text">
          <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
            success="right" id = "name1" />
          <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
            success="right" id = "email1" />
          <MDBInput label="Your password" icon="lock" group type="password" validate id = "pass1" />
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

export default FormPage;