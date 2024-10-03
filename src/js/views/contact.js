import React, { useContext,useState, useEffect } from "react";
import { Context } from "../store/appContext";
import {Modal, Button, Form} from "react-bootstrap"

const Contacts = () => {
    const {store , actions} = useContext(Context);
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [currentId, setCurrentId] = useState(null)
    
    useEffect (() => {actions.getAgenda()}, [actions])

    const inputName = (event) => setName(event.target.value);
    
    const inputPhone = (event) => setPhone(event.target.value);

    const inputEmail = (event) => setEmail(event.target.value);

    const inputAddress = (event) => setAddress(event.target.value);


    const openModal = (contact) => {
        setName(contact.name)
        setPhone(contact.phone)
        setEmail(contact.email)
        setAddress(contact.address)
        setCurrentId(contact.id); 
        setShowModal(true); 
    };

    const closeModal = () => setShowModal(false)

    const handleUpdate = () => {
       const updateContact = {name, phone, email, address};
      actions.updateContact(currentId)
      console.log (...updateContact, currentId);
    }
    return (
        <div>
            {store.contacts.map((contact, index) => {
                return(
                    <div key ={index}>
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title"> {contact.name}</h4>
                                <p className="card-text">{contact.phone}</p>
                                <p className="card-text"> {contact.email}</p>
                                <p className="card-text"> {contact.address}</p>
                            </div>
                            <button onClick={() => actions.deleteContact(contact.id)} className="btn btn-danger">Delete</button>
                        
                          <button type="button" onClick={() => openModal(contact)} className="btn btn-primary">
                               Edit Contact
                          </button>

                       </div>
                    </div>
                )
            })}
                <Modal show= {showModal} onHide={closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Contact</Modal.Title>
                    </Modal.Header>
                    <Modal.Body> 
                        <Form>
                                <Form.Group className="mb-3" controlId="formGroupName">
                                <Form.Label name="name"></Form.Label>
                                <Form.Control type="text" placeholder="Name" value={name} onChange={inputName} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPhone">
                                <Form.Label name="phone"></Form.Label>
                                <Form.Control type="text" placeholder="Phone" value={phone} onChange={inputPhone} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label name="email"></Form.Label>
                                <Form.Control type="text" placeholder="Email" value={email} onChange={inputEmail} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupAddress">
                                <Form.Label name="address"></Form.Label>
                                <Form.Control type="text" placeholder="Address" value={address} onChange={inputAddress} />
                                </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeModal}>Cancel</Button>
                        <Button variant="primary" onClick={handleUpdate}>Save Changes</Button>
                    </Modal.Footer>
                  </Modal>
        
                     <a href="https://silver-zebra-wr9vgv76xvg6cgwrj-3000.app.github.dev/contacts/addcontacts">
                    <button className="btn btn-primary mt-3">Add new contact</button>
                    </a> 
        </div>
    )
}

export {Contacts}