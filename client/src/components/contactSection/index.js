import React, {useState} from 'react'
import {
    VideoBg,
    ContContainer,
    FormWrap,
    Form,
    ContBg,
    FormContent,
    FormInput,
    FormLabel,
    ContH1,
    ContContent,
    FormButton, FormMessage
} from './ContactElems'
import Video from '../../videos/video1.mp4'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  Object.values(rest).forEach((val) => {
    val === '' && (valid = false);
  });

  return valid;
};

const Contact = ({ id }) => {
  const [form, setForm] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  

  const formChange = (e) => {
    e.preventDefault()
    const fieldName = e.target.name
    const fieldValue = e.target.value
    switch (fieldName) {
      case 'name':
        setName(fieldValue)
        break
    case 'email':
        setEmail(fieldValue)
        break
    case 'subject':
        setSubject(fieldValue)
        break
    case 'message':
        setMessage(fieldValue)
        break
    default :
      return null
    }
  }

  function toastifySuccess() {
    toast.success('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
    });
  }

  function toastifyFail() {
    toast.error('Form failed to send!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback fail',
    });
  }

    const handleSubmit = (e) => {
      e.preventDefault()

      const formState = {
        name: name,
        email: email,
        subject: subject,
        message: message
      }
      setForm(formState)

      if(formValid(form)) {

        let templateParams = {
          name: name,
          email: email,
          subject: subject,
          message: message,
        };  

      emailjs.send('service_5qxccsq', 'YOUR_TEMPLATE_ID', templateParams, 'userID');

      console.log(`
        --SUBMITTING--
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `);

    } else {
      console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
    }
  }


    return (
        <ContContainer id={id}>
          <ContBg>
              <VideoBg playsInline autoPlay loop muted src={Video} type='video1/mp4' />
          </ContBg>
          <ContContent>
            <FormWrap >
                <Form>
                <ContH1>Contact Me</ContH1>
                  <FormLabel>Name</FormLabel>
                  <FormInput
                    type='text'
                    name='name'
                    placeholder='Name'
                    onChange={formChange}
                  ></FormInput>
                  <FormLabel>Email</FormLabel>
                  <FormInput
                    type='text'
                    name='email'
                    placeholder='Email'
                    onChange={formChange}
                  ></FormInput>
                  <FormLabel>Subject</FormLabel>
                  <FormInput
                    type='text'
                    name='subject'
                    placeholder='subject'
                    onChange={formChange}
                  ></FormInput>
                  <FormLabel>Message</FormLabel>
                  <FormMessage
                    type='text'
                    name='message'
                    placeholder='message'
                    onChange={formChange}
                  ></FormMessage>
                <FormButton>Send Message</FormButton>
                </Form>
            </FormWrap>
            <ToastContainer />
          </ContContent>
      </ContContainer>
    )
}

export default Contact
