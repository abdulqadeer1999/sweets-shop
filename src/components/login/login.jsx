
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import axios from 'axios'
import url from 'url'
import response from 'response'

const LogIn = () => {

  axios({
    method: 'post',
    url: url + "/login",
    data: {
        email: document.getElementById("email2").value,
        password: document.getElementById("pass2").value,
    }, withCredentials: true
    
}).then((response) => {
    console.log(response);
    alert(response.data.message)
    window.location.href = "home.html"
}, (error) => {
    console.log(error);
    alert(error)
});


    return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
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
    
    export default LogIn;