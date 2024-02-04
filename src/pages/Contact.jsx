import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    email: '',
    name: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Perform email validation
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: emailRegex.test(value) ? '' : 'Please enter a valid email address',
      }));
    }

    // Clear the field-required notification when the user starts typing
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    // Show a notification if the field is required and empty
    if (value.trim() === '' && name !== 'email') {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [name]: 'This field is required',
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission, e.g., sending data to a server

    // For now, just log the form data to the console
    console.log('Form submitted:', formData);

    setFormData({
      name: '',
      email: '',
      message: '',
    });

    setFormErrors({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <Container>
      <Row className='mb-5 mt-3'>
        <Col lg='8'>
          <h1 className='display-4 mb-4'>
            {/* Contact Me */}
          </h1>
        </Col>
      </Row>

      <Row className='sec_sp'>
        <Col lg='5' className='mb-5'>
          <h3 className='color_sec py-4'>Get in touch</h3>
          <address>
            <strong>Email : nfailor@gmail.com</strong>
            <br />
            <br />
            <p>
              <strong>Phone : 817-682-2060</strong>
            </p>
          </address>
          {/* COME BACK TO THIS */}
          {/* <p>{description}</p> */}
        </Col>
        <Col lg='7' className='d-flex align-items-center'>
          <form className='contact__form w-100' onSubmit={handleSubmit}>
            <Row>
              <Col lg='6' className='form-group'>
                <input
                  className='form-control'
                  id='name'
                  name='name'
                  placeholder='Name'
                  type='text'
                  value={formData.name}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  required
                />
                <p className="error-message">{formErrors.email}</p>
              </Col>
              <Col lg='6' className='form-group'>
                <input
                  className='form-control rounded-0'
                  id='email'
                  name='email'
                  placeholder='Email'
                  type='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  required
                />
                <p className="error-message">{formErrors.email}</p>
              </Col>
            </Row>
            <textarea 
                      className='form-control rounded-0' id='message'
                      name='message'
                      placeholder='Message'
                      rows='5'
                      value={formData.message}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      required
            ></textarea>
            <p className="error-message">{formErrors.message}</p>
            <br />
            <Row>
              <Col lg='12' className='form-group'>
                <button className='btn ac_btn' type='submit' onSubmit={handleSubmit}>Send</button>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </Container>
  );
}