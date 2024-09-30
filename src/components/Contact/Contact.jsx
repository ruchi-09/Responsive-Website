import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phn_icon from '../../assets/phn-icon.png'
import location_icon from '../../assets/location-icon.png'

function Contact() {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "54bd04e8-1d49-4822-8d78-01429c1f9295");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email Sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <div className="contact">
        <div className="contact-col">
            <h3>Send us a Message <img src={msg_icon}/></h3>
            <p>You are welcome to reach out at any time if you have further questions.</p>
            <ul>
                <li><img src={mail_icon}/>Contact@GreatStack.in</li>
                <li><img src={phn_icon}/>+1 156 896 5346</li>
                <li><img src={location_icon}/>249 Evans St, PA 15698</li>
            </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name="name" placeholder='Enter your Name' required/>
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder="Enter your Contact Number" required/>
            <label>Type your Message Here</label>
            <textarea name="message" placeholder="Enter your Message" rows="6"></textarea>
            <button type="Submit" className='btn dark-btn'>Submit Now</button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </div>
  )
}

export default Contact
