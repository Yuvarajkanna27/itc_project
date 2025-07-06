import React from 'react';
import TopNav from './TopNav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import Reg1 from "./img1/new banner-enroll.jpg";
import FooterNav from './FooterNav';

function Register() {
  return (
    <>
        <TopNav/>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 col-12">
                    <div>
                      <h1 className="regis mt-2">Welcome to CLUB ITC for A bouquet of benefits and Privileges</h1>
                      <div className="mx-3">
                        <p><h6 className="meet">All fields are mandatory unless mentioned as optional</h6></p>
                        <h4>Salutation</h4>
                        <span>
                          <Button className="me-3" variant="outline-secondary">Mr.</Button>
                          <Button className="me-3" variant="outline-secondary">Mrs.</Button>
                          <Button variant="outline-secondary">Ms.</Button>
                          <Form className="mt-3">
                            <Form.Group className="mb-3">
                              <FloatingLabel controlId="floatingInput" label="Enter Your First Name" className="mb-3">
                                <Form.Control type="name" placeholder="Enter Your First Name" />
                              </FloatingLabel>
                            </Form.Group>
                            <Form.Group className="mb-3">
                              <FloatingLabel controlId="floatingInput" label="Enter Last First Name" className="mb-3">
                                <Form.Control type="name" placeholder="Enter Your Last Name" />
                              </FloatingLabel>
                            </Form.Group>
                            <h6>GENDER</h6>
                            <span>
                              <Button className="me-3" variant="outline-secondary">Male</Button>
                              <Button className="me-3" variant="outline-secondary">Female</Button>
                            </span>
                            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3 mt-3">
                              <Form.Control type="email" placeholder="name@example.com" />
                            </FloatingLabel>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter Your Password" />
                            </Form.Group>
                            <Form.Group  controlId="formGridState" label="Select">
                              <Form.Label>Country</Form.Label>
                                <Form.Select defaultValue="Select">
                                <option>Select</option>
                                <option value="AP">Andhra Pradesh</option>
                                <option value="AR">Arunachal Pradesh</option>
                                <option value="AS">Assam</option>
                                <option value="BR">Bihar</option>
                                <option value="CG">Chhattisgarh</option>
                                <option value="GA">Goa</option>
                                <option value="GJ">Gujarat</option>
                                <option value="HR">Haryana</option>
                                <option value="HP">Himachal Pradesh</option>
                                <option value="JK">Jammu and Kashmir</option>
                                <option value="JH">Jharkhand</option>
                                <option value="KA">Karnataka</option>
                                <option value="KL">Kerala</option>
                                <option value="MP">Madhya Pradesh</option>
                                <option value="MH">Maharashtra</option>
                                <option value="MN">Manipur</option>
                                <option value="ML">Meghalaya</option>
                                <option value="MZ">Mizoram</option>
                                <option value="NL">Nagaland</option>
                                <option value="OD">Odisha</option>
                                <option value="PB">Punjab</option>
                                <option value="RJ">Rajasthan</option>
                                <option value="SK">Sikkim</option>
                                <option value="TN">Tamil Nadu</option>
                                <option value="TS">Telangana</option>
                                <option value="TR">Tripura</option>
                                <option value="UP">Uttar Pradesh</option>
                                <option value="UK">Uttarakhand</option>
                                <option value="WB">West Bengal</option>
                              </Form.Select>
                            </Form.Group>
                            <Form.Check aria-label="option 2" className="mt-3"/>
                            <span>By signing up, I agree & accept the Terms & Conditions of the Club ITC Programme</span><br/>
                            <Button variant="outline-success" className="mt-4">Register</Button>
                          </Form>
                        </span>
                      </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <img className="col-12" src={Reg1} width={"740px"} alt="ITC HOTEL" />
                </div>
            </div>
        </div>
        <FooterNav />
    </>
  )
}

export default Register
