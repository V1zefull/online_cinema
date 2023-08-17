import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Form, FormGroup} from "react-bootstrap";
import './login.css'
import Register from '../register_modal/register'

const Login = ({show, onHide}) => {

    const [RegistrationVisible, setRegistrarionVisible] = useState(false)
    const userLogin = async() =>{
        try{
            onHide(true)
        } catch (e){
        }
    }

    const userRegModal = async() =>{
        try{
            onHide(true)
        } catch (e){
        }
    }

    return (
        <>
            <Modal
                show={show}
                onHide={onHide}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <FormGroup className="mb-3">
                            <div>
                                <input
                                    name="email"
                                    type="text"
                                    placeholder="Email"
                                    className="logForm"
                                />
                            </div>
                            <div>
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    className="logForm"
                                />
                            </div>
                        </FormGroup>
                    </Form>
                    <p>If you don't have an account then you need to<button className="regBtn" onClick={()=> {setRegistrarionVisible(true); userRegModal()}}>Register</button></p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onHide}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={userLogin}>Login</Button>
                </Modal.Footer>
            </Modal>
            <Register show={RegistrationVisible} onHide={() => setRegistrarionVisible(false)} />
        </>
    );
};

export default Login;