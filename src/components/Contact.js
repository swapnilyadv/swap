import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // First email - to portfolio owner
      const result = await emailjs.sendForm(
        'service_0oxe7yt',
        'template_46b8h7o',
        form.current,
        'kZaso44Zu-VJBOVOi'
      );

      if (result.text === 'OK') {
        // Store user details before form reset
        const userName = form.current.user_name.value;
        const userEmail = form.current.user_email.value;

        // Second email - auto-reply
        const autoReplyResult = await emailjs.send(
          'service_0oxe7yt',
          'template_l7dyjbv',
          {
            to_name: userName,
            to_email: userEmail,
            from_name: 'Swapnil Yadav',
            from_email: 'swapnilyadav.dude@gmail.com',
            subject: 'Thank you for contacting me!',
            message: `Thank you for reaching out through my portfolio website. I will get back to you soon!

Best regards,
Swapnil Yadav`
          },
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