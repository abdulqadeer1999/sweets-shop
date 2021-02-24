
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';


const LogIn = () => {

  


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