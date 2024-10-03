import React, { useContext,useState } from "react";
import { Context } from "../store/appContext";

const Contacts = () => {
    const {store , actions} = useContext(Context);
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [currentId, setCurrentId] = useState(null)
    
    const inputName = (event) => {
        setName({...name, [event.target.name]: event.target.value})
    } 

    const inputPhone = (event) => {
        setPhone({...phone, [event.target.phone]: event.target.value})
    }

    const inputEmail = (event) => {
        setEmail({...email, [event.target.email]: event.target.value})
    } 

    const inputAddress = (event) => {
        setAddress({...address, [event.target.address]: event.target.value})

    } 

    const memoryEdit = (contact) => {
        setName(contact.name)
        setPhone(contact.phone)
        setEmail(contact.email)
        setAddress(contact.address)
        setCurrentId(contact.id); 
        setShowModal(true); 
    };

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
                        
                          <button type="button" onClick={() =>memoryEdit(contact)} className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                               Edit Contact
                          </button>


                       </div>
                    </div>
                )
            })}
                {showModal && ( 
                      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                             <div className="modal-dialog" role="document">
                                 <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                        <button type="button" onClick={() => setShowModal(false)} className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                    <form>
                                        <div className="form-group mt-3 mb-3">
                                            <label htmlFor="formGroupName">Name</label>
                                            <input type="text" name="name" className="form-control" id="formGroupName"  placeholder="Name" onChange={inputName}></input>
                                        </div>
                                        <div className="form-group mt-3 mb-3">
                                            <label htmlFor="formGroupPhone">Phone</label>
                                            <input type="text" name="phone" className="form-control" id="formGroupPhone" placeholder="Phone" onChange={inputPhone}></input>
                                        </div>
                                        <div className="form-group mt-3 mb-3">
                                            <label htmlFor="formGroupEmail">Email</label>
                                            <input type="text" name="email" className="form-control" id="formGroupEmail" placeholder="Email" onChange={inputEmail}></input>
                                        </div>
                                        <div className="form-group mt-3 mb-3">
                                            <label htmlFor="formGroupAddress">Address</label>
                                            <input type="text" name="address" className="form-control" id="formGroupAddress" placeholder="Address" onChange={inputAddress}></input>
                                        </div>
                                    </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => setShowModal(false)}>Close</button>
                                        <button type="button" className="btn btn-primary">Save changes</button>
                                    </div>
                                 </div>
                            </div>
                        </div>
                )}
                     <a href="https://silver-zebra-wr9vgv76xvg6cgwrj-3000.app.github.dev/contacts/addcontacts">
                    <button className="btn btn-primary mt-3">Add new contact</button>
                    </a> 
        </div>
    )
}

export {Contacts}