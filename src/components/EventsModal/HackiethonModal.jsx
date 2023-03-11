// import React from "react";
import Modal from 'react-bootstrap/Modal';
import {Button} from 'react-bootstrap';
import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';

function HackiethonModal() {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);

    return (
        <>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Hackiethon is here!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Hackiethon has launched! Click on "Go to site" to find out more!
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Got it!
            </Button>
            <Button href="https://hackiethon.hackmelb.org/" variant="primary" onClick={handleClose}>
                Go to site
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default HackiethonModal;