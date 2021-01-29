import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { ContBg, ContContainer, VideoBg } from './ContactElems'

const Contact = ({ id }) => {
    return (
        <ContContainer id={id}>
            <ContBg>
            <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
            </ContBg>
        </ContContainer>
    )
}

export default Contact
