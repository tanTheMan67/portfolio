import { useState } from "react"
import ContactForm from "./ContactForm";

 const Contact = ()=>{
    const [showForm,setShowForm]=useState("false");
    const Formhandler = ()=>(
        setShowForm(!showForm)
    );
    return(
<div className="contact">
    <h1 className="contact-head">contact</h1>
    {showForm && <button className="contact-button" onClick={Formhandler}>click here to collaborate with cool dev!</button>}
    {!showForm && <ContactForm/>}
</div>
    )
 }
 export default Contact