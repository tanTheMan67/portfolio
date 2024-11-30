const ContactForm = ()=>(
<div className="contact-form">
    <form className="form">
    <input  className=" text-fields" type="text" placeholder="Enter Name"></input>
     <input  className=" text-fields" type="text" placeholder="Enter Email"></input>
     <textarea  placeholder="Enter Your Message"></textarea>
     <input className="form-button" type="submit" value="SUBMIT" />
    </form>
</div>
)
export default ContactForm;