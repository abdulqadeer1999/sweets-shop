
// import 'bootstrap/dist/css/bootstrap.min.css';
// //  import {Col,Button,Form  } from 'react-bootstrap';
// import './login.css'


// function Login () {
//      return (
//       <div>
       
//         <div className="form-row">
//         <div className="form-group col-md-6">
//             <label htmlFor="inputEmail4">Email</label>
//             <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
//           </div>
//         <div className="form-group col-md-6">
//             <label htmlFor="inputPassword4">Password</label>
//             <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
//           </div>
          
//           <br /> <br />
//         <button type="submit" className="btn btn-secondary">Log In</button>
//       </div>
//       </div>
//     );
//   }


// export default Login ;



import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';

const FormPage = () => {
    return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form>
            <p className="h5 text-center mb-4">Login</p>
            <div className="grey-text">
              {/* <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
                success="right" /> */}
              <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
                success="right" />

<MDBInput label="Your password" icon="lock" group type="password" validate />
              {/* <MDBInput label="Confirm your email" icon="exclamation-triangle" group type="text" validate
                error="wrong" success="right" />
              <MDBInput label="Your password" icon="lock" group type="password" validate /> */}
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
    
    export default FormPage;