import React from 'react';
import Modal from "react-bootstrap/Modal";
import {Form, FormGroup} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Register = ({show, onHide}) => {
    const userRegister = async() =>{
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
                    <Modal.Title>Register</Modal.Title>
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
                            <div>
                                <input
                                    name="passwordRepeat"
                                    type="password"
                                    placeholder="Repeat password"
                                    className="logForm"
                                />
                            </div>
                        </FormGroup>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onHide}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={userRegister}>Register</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Register;