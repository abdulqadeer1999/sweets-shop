
// import 'bootstrap/dist/css/bootstrap.min.css';
// //  import {Col,Button,Form  } from 'react-bootstrap';
//  import {Form,Button } from 'react-bootstrap';
//  import './signup.css'


// function SignUp () {
//      return (
//       <div>
       
//         <div className="form-row">
//         <div className="form-group col-md-6">
//             <label htmlFor="inputName">Name</label>
//             <input type="name" className="form-control" id="inputName" placeholder="Name" />
//           </div>
//           <div className="form-group col-md-6">
//             <label htmlFor="inputEmail4">Email</label>
//             <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
//           </div>
//           <br /> <br />
//           <div className="form-group col-md-6">
//             <label htmlFor="inputPassword4">Password</label>
//             <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
//           </div>
//           <div className="form-group col-md-6">
//             <label htmlFor="inputNumber4">Number</label>
//             <input type="number" className="form-control" id="inputNumber4" placeholder="Number" />
//           </div>
//         </div>
//         <div className="form-row">
//           <div className="form-group col-md-6">
//             <label htmlFor="inputCity">City</label>
//             <input type="text" className="form-control" id="inputCity" placeholder = "City" />
            
//           </div>
//         </div>
//         <div className="form-group">
//           <div className="form-check">
//             <input className="form-check-input" type="checkbox" id="gridCheck" />
//             <label className="form-check-label" htmlFor="gridCheck">
//               Check me out
//             </label>
//           </div>
//         </div>
//         <button type="submit" className="btn btn-primary">Sign Up</button>
//       </div>
//     );
//   }


// export default SignUp ;


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
        <p className="h5 text-center mb-4">Sign up</p>
        <div className="grey-text">
          <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
            success="right" />
          <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
            success="right" />
          {/* <MDBInput label="Confirm your email" icon="exclamation-triangle" group type="text" validate
            error="wrong" success="right" /> */}
          <MDBInput label="Your password" icon="lock" group type="password" validate />
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