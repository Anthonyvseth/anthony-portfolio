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

const About = ({
    id,
    headline,
    description,
    img
}) => {
    return (
        <AboutContainer id={id}>
            <AboutWrapper>
                <Column1>
                    <TextWrapper>
                    <Heading >{headline} </Heading>
                    <Subtitle> {description} </Subtitle>
                    </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                        <Img src={img} />
                    </ImgWrap>
                </Column2>
            </AboutWrapper>
        </AboutContainer>
    )
}

export default About
