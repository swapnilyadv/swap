import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  // Email validation function
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus('sending');
  
    try {
      // Get user details from form fields
      const userName = form.current.user_name.value;
      const userEmail = form.current.user_email.value;
  
      // Check if the email is not empty
      if (!userEmail) {
        throw new Error("Email address is required.");
      }
  
      // Validate email format
      if (!validateEmail(userEmail)) {
        throw new Error("Invalid email address");
      }
  
      console.log("User email:", userEmail); // Log the email to verify it's captured
  
      // First email - to portfolio owner
      const result = await emailjs.sendForm(
        'service_0oxe7yt',
        'template_46b8h7o',
        form.current,
        'kZaso44Zu-VJBOVOi'
      );
  
      if (result.text === 'OK') {
        // Second email - auto-reply
        const autoReplyResult = await emailjs.send(
          'service_0oxe7yt',
          'template_l7dyjbv',
          {
            to_name: userName,
            to_email: userEmail,  // Hardcoded test email
            from_name: 'Swapnil Yadav',
            from_email: 'swapnilyadav.dude@gmail.com',
            message: `Thank you for reaching out through my portfolio website. I will get back to you soon!`
          },
          'kZaso44Zu-VJBOVOi'
        );
        
  
        console.log("Auto-reply result:", autoReplyResult); // Log the result to verify if it's successful
  
        // Check if the auto-reply was successfully sent
        if (autoReplyResult.text === 'OK') {
          setStatus('success');
          form.current.reset();
        } else {
          console.error("Auto-reply failed:", autoReplyResult);
          throw new Error("Auto-reply email failed.");
        }
      } else {
        console.error("Initial email to portfolio owner failed:", result);
        throw new Error("Initial email to portfolio owner failed.");
      }
    } catch (error) {
      console.error('Email Error:', error);
      setStatus('error');
    }
  
    // Reset status after 5 seconds
    setTimeout(() => setStatus(''), 2000);
  };
  

  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <h2><span className="highlight">&lt;</span> Let's Connect <span className="highlight">/&gt;</span></h2>
        <p className="contact-description">
          Have a question or want to work together? Feel free to reach out!
        </p>
        
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <input type="text" name="user_name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" name="user_email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="submit-btn" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 
             status === 'success' ? 'Message Sent!' : 
             status === 'error' ? 'Try Again' : 
             <>Send Message <FaPaperPlane /></>}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
