import React from "react";


function Contact(){
    return(
       <section>
           <h1>Contact Me Below!</h1>
           <form id = "contact-form">
                <div>
                    <label>What is your name?</label>
                    <input type="text" name="name" />
                </div>

                <div>
                    <label>Enter Your Email Address</label>
                    <input type="email" name="email" />
                </div>

                <div>
                    <label>Your Inquiry</label>
                    <textarea name="message" rows="4" />
                </div>
                <button type="submit">Submit</button>
           </form>
       </section>
    )
}


export default Contact;