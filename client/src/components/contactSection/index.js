import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
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
    ContContent
} from './ContactElems'
import Video from '../../videos/video1.mp4'

const Contact = ({ id }) => {
    return (
        <ContContainer id={id}>
          <FormWrap>
            <ContBg>
                <VideoBg playsInline autoPlay loop muted src={Video} type='video1/mp4' />
            </ContBg>
            <ContContent>
              <Form>
                <ContH1>Contact Me</ContH1>
              </Form>
              <ToastContainer />
            </ContContent>
          </FormWrap>
      </ContContainer>
    )
}

export default Contact
