import React, { useState } from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import Layout from "../layout/AppLayout.jsx";
import email2jpeg from '../icons/email2.jpeg';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform the necessary logic to send the email or process the form data
    // You can use a library like axios to make an API request to a server-side endpoint


    // Reset the form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Layout>
      <Container className="contact">
        <Row>
        <Image fluid
                  className="d-block w-25"
                  src={email2jpeg} alt="email icon"
                />
          <Col>
            <form onSubmit={handleSubmit}>
            <h1 className="emailMeTitle">Get In Touch</h1>
              <div>
                <label className="name" htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="email" htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="message" htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  rows="15"
                  cols="21"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required>
                </textarea>
              </div>
              <button id="submit" type="submit">Submit</button>
            </form>
          </Col>
          <div className="emailImg">
            <Image fluid
                    className="d-block w-25"
                    //src="/images/email2.jpeg"
                    //alt="Email icon"
                  />
          </div>      
        </Row>
      </Container>
    </Layout>
  );
};

export default ContactForm;