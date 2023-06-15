import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import Layout from "../layout/AppLayout.jsx";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform the necessary logic to send the email or process the form data
    // You can use a library like axios to make an API request to a server-side endpoint

    // Example code to demonstrate the form data
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Reset the form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Layout>
      <Container className="contact">
        <form onSubmit={handleSubmit}>
        <h1 className="emailMeTitle">Email Me</h1>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </Container>
    </Layout>
  );
};

export default ContactForm;