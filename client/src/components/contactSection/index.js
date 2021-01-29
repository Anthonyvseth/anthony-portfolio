import React, {useState} from 'react'
import Video from '../../videos/video1.mp4'
import { ContBg, ContContainer, VideoBg } from './ContactElems'
import ContactForm from './ContactForm'

const Contact = ({ id }) => {
    return (
        <ContContainer id={id}>
            <ContBg>
            <VideoBg playsInline autoPlay loop muted src={Video} type='video1/mp4' />
            <ContactForm />
            </ContBg>
        </ContContainer>
    )
}

export default Contact
