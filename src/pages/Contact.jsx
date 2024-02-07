import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add logic to handle form submission, e.g., sending data to a server
    if (Object.values(formErrors).some((error) => error !== '')) {
      console.log('Form validation errors. Please fix them before submitting.');
      return;
    }

    try {
      const response = await axios.post('https://getform.io/f/d11be971-7076-44ed-8cad-6ef27ee8dced', formData);

      console.log('Form submitted successfully', response.data);

      setFormData({
        name: '',
        email: '',
        message: '',
      });

    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Container className='contact'>
      <Row className='sec_sp'>
        <Col lg='5' className='mb-5 getInTouch'>
          <h3 className='color_sec py-4'>Get in touch</h3>
          <address>
            <strong>Email : nfailor@gmail.com</strong>
            <br />
            <br />
            <p>
              <strong>Phone : 817-682-2060</strong>
            </p>
          </address>
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
                <button className='btn ac_btn' type='submit' onSubmit={handleSubmit}>Submit</button>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </Container>
  );
}