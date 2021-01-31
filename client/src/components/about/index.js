import React from 'react'
import { 
    AboutContainer, 
    AboutWrapper,
    Column1,
    TextWrapper,
    Heading,
    Subtitle,
    Column2,
    ImgWrap,
    Img 
} from './AboutElems'
import profile from '../../assets/profile-pic.jpg'

const About = ({
    id,
    headline,
    description,
    img,
    alt
}) => {
    return (
        <AboutContainer id={id}>

                <Column1>
                    <TextWrapper>
                    <Heading >{headline} </Heading>
                    <Subtitle> {description} </Subtitle>
                    </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                        <Img src={profile} alt={alt} />
                    </ImgWrap>
                </Column2>

        </AboutContainer>
    )
}

export default About
