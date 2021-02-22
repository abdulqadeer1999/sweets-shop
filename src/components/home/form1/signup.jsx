import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import axios from 'axios'
import url from 'url'
import response from 'response'

function FormPage() {
    
    
  axios({
      method: 'post',
      url: url + "/signup",
      data: {
          name: document.getElementById("name1").value,
          email: document.getElementById("email1").value,
          password: document.getElementById("pass1").value,
          
          
          
      },withCredentials: true
      
  }).then(function (response) {
      console.log(response.data.message);
      alert(response.data.message);
      window.location.href = "login.html"
  })
  
  .catch(function (error) {
      console.log(error);
      alert(response.message)
  });
  




return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form>
        <p className="h5 text-center mb-4">Sign up</p>
        <div className="grey-text">
          <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
            success="right" id = "name1" />
          <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
            success="right" id = "email1" />
          {/* <MDBInput label="Confirm your email" icon="exclamation-triangle" group type="text" validate
            error="wrong" success="right" /> */}
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


return false;
};
export default FormPage;