import React, { useState } from 'react';
import TopNav from './TopNav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


import Log1 from "./img1/login.png";
import FooterNav from './FooterNav';

function Login() {

    const [pwd1, setPwd1] = useState("");
    const [pwd2, setPwd2] = useState("");
    const [same, setSame] = useState(false)

    function handlePwd1Change(event)
    {
        setPwd1(event.target.value);
    }

    function handlePwd2Change(event)
    {
        setPwd2(event.target.value);
        
        if(pwd1 === event.target.value)
        {
            console.log("Password Same");
            setSame(true);

        }
        else{
            console.log("Password Not Same");
            setSame(false);
        }
    }

  return (
    <>
        <TopNav />
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 col-12">
                    <div className="log1">
                        <h1 className="meet">Reward yourself with Club ITC</h1>
                        <h5>Sign in with your Credentials</h5>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>MEMBERSHIP NUMBER OR EMAIL ID</Form.Label>
                                <Form.Control type="email" placeholder="Membership Number OR Email ID"  />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control value={pwd1} type="password" placeholder="Enter Your Password" onChange={handlePwd1Change} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Re-Enter Password</Form.Label>
                                <Form.Control vlaue={pwd2} type="password" placeholder="Re-Enter Your Password" onChange={handlePwd2Change} />
                                {same && <p>Password Match</p>}
                                {!same && <p>Password Not Match</p>}
                            </Form.Group>
                            <Button variant="outline-success" className="mt-4">Login</Button>
                            <h6 className="mt-3">Forget Password ?</h6>
                        </Form>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="log2">
                        <h1 className="meet">Not a Member? Enrol Now</h1>
                        <img className="mt-3 col-12" src={Log1} alt="ITC HOTEL" />
                        <h5 className="mt-2">The Club ITC Advantage</h5>
                        <div>
                            <div className="row">
                                <div className="d-flex">
                                    <ul className="list-unstyled me-5">
                                        <li>Cardless earning & redemption</li>
                                        <li className="my-3">Value e-Vouchers on tier upgrade</li>
                                        <li>Rollover nights</li>
                                    </ul>
                                    <ul className="list-unstyled">
                                        <li>Member only rates</li>
                                        <li className="my-2">Reward nights at over 7,000 hotels<br/> worldwide*</li>
                                        <li>Free Wi-Fi</li>
                                    </ul>
                                </div>
                            </div>
                            <Button style={{borderRadius: "20px"}} variant="outline-secondary">JOIN CLUB ITC NOW</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FooterNav />
    </>
  )
}

export default Login
