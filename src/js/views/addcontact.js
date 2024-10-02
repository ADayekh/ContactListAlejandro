import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

const AddContacts = () => {
    const {store, actions} = useContext(Context);
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")

 
    
    const inputName = (event) => {
        setName(event.target.value)
    } 

    const inputPhone = (event) => {
        setPhone(event.target.value)
    } 

    const inputEmail = (event) => {
        setEmail(event.target.value)
    } 

    const inputAddress = (event) => {
        setAddress(event.target.value)
    } 

    const handleAddContact = () => {
        let addContact = {
        "name": name,
        "phone": phone,
        "email": email,
        "address": address
        }
        actions.addContact(addContact)
        }
    
        const handleUpdateContact = () => {
            let updateContact = {
            "name": name,
            "phone": phone,
            "email": email,
            "address": address,
            "id": 16 ,
            }
            actions.updateContact(updateContact)
            }

    return (
    <div className="container">
        <form>
            <div className="form-group mt-3 mb-3">
                <label for="formGroupName">Name</label>
                <input type="text" className="form-control" id="formGroupName"  placeholder="Name" onChange={inputName}></input>
            </div>
            <div className="form-group mt-3 mb-3">
                <label for="formGroupPhone">Phone</label>
                <input type="text" className="form-control" id="formGroupPhone" placeholder="Phone" onChange={inputPhone}></input>
            </div>
            <div className="form-group mt-3 mb-3">
                <label for="formGroupEmail">Email</label>
                <input type="text" className="form-control" id="formGroupEmail" placeholder="Email" onChange={inputEmail}></input>
            </div>
            <div className="form-group mt-3 mb-3">
                <label for="formGroupAddress">Address</label>
                <input type="text" className="form-control" id="formGroupAddress" placeholder="Address" onChange={inputAddress}></input>
            </div>
            <button onClick={handleAddContact} type="submit" className="btn btn-primary m-3">Save Contact</button>
            <button onClick={handleUpdateContact} type="submit" className="btn btn-primary m-3">Update updateContact</button>
        </form>
        </div>
    )
}

export {AddContacts};