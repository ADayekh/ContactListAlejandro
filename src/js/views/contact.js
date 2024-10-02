import React, { useContext } from "react";
import { Context } from "../store/appContext";

const Contacts = () => {
    const {store , actions} = useContext(Context);

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
                       </div>
                    </div>
                )
            })}
                     <a href="https://silver-zebra-wr9vgv76xvg6cgwrj-3000.app.github.dev/contacts/addcontacts">
                    <button className="btn btn-primary mt-3">Add new contact</button>
                    </a> 
        </div>
    )
}

export {Contacts}