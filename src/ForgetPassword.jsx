import React from 'react';
import TopNav from './TopNav';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

import Forget1 from "./img1/forgot-password.png";
import FooterNav from './FooterNav';

function Forget_Password() {
  return (
    <>
        <TopNav />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="forget">
                <h1 className="meet">Forgot Password</h1>
                <h6>Enter the below details to reset your password</h6>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>MEMBERSHIP NUMBER OR EMAIL ID</Form.Label>
                      <Form.Control type="email" placeholder="Membership Number OR Email ID" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <FloatingLabel controlId="floatingInput" label="Membership Number" className="mb-3">
                      <Form.Control type="name" placeholder="Membership Number" />
                    </FloatingLabel>
                  </Form.Group>
                  <Button variant="outline-secondary" className="mt-4">Register</Button>
                </Form>
              </div>
            </div>
            <div className="col-md-6">
              <img className="col-12 mt-3" src={Forget1} alt="ITC HOTEL" />
            </div>
          </div>
        </div>
        <FooterNav />
    </>
  )
}

export default Forget_Password
