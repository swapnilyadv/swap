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
      // First email - sending to you
      const templateParams = {
        to_email: 'swapnil.yadav7999@gmail.com', // Your email
        user_name: form.current.user_name.value,
        user_email: form.current.user_email.value,
        message: form.current.message.value
      };

      const result = await emailjs.send(
        'service_0oxe7yt',
        'template_46b8h7o',
        templateParams,
        'kZaso44Zu-VJBOVOi'
      );

      if (result.text === 'OK') {
        // Auto-reply email
        const autoReplyParams = {
          to_name: templateParams.user_name,
          to_email: templateParams.user_email,
          from_name: 'Swapnil Yadav',
          subject: 'Thank you for contacting me!',
          message: `Thank you for reaching out through my portfolio website. I will get back to you soon!

Best regards,
Swapnil Yadav`
        };

        const autoReplyResult = await emailjs.send(
          'service_0oxe7yt',
          'template_l7dyjbv',
          autoReplyParams,
          'kZaso44Zu-VJBOVOi'
        );

        if (autoReplyResult.text === 'OK') {
          setStatus('success');
          form.current.reset();
        }
      }
    } catch (error) {
      console.error('Email Error:', error);
      setStatus('error');
    }

    setTimeout(() => setStatus(''), 5000);
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
