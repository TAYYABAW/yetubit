import React from 'react'
import { Row, Card, Col, Button, Modal, Container } from "react-bootstrap";

function Setting(gridInsideModal , setGridInsideModal) {
    
    return (
        <Modal className="fade d-flex" show={gridInsideModal} style={{}} size="lg" >
        <Modal.Header>
          <Modal.Title>Account Setting</Modal.Title>
          <Button
            variant=""
            className="btn-close"
            onClick={() => setGridInsideModal(false)}
          >
            
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Container className="">
            <Col lg="12">
  
    <div className="p-0">
      <Button className="me-2 bg-white fw-bold" style={{color: "black", borderColor: "grey", }}>
        Profile
      </Button>
      <Button className="me-2 bg-white fw-bold" style={{color: "black", borderColor: "grey", }}>
        Referrals
      </Button>
      <Button className="me-2 bg-white fw-bold" style={{color: "black", borderColor: "grey", }}>
        Password
      </Button>
      <Button className="me-2 bg-white fw-bold" style={{color: "black", borderColor: "grey", }}>
        2FA
      </Button>
      <Button className="me-2 bg-white fw-bold" style={{color: "black", borderColor: "grey", }}>
        Sessions & Login History
      </Button>
  
    </div>
</Col>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger light"
            onClick={() => setGridInsideModal(false)}
          >
            Close
          </Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>

    );
  }

export default Setting
