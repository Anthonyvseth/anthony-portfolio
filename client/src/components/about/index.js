import React, {useState} from 'react'
import { 
    AboutContainer, 
    Column1,
    TextWrapper,
    Heading,
    Subtitle,
    Column2,
    ImgWrap,
    Img,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
    Button
} from './AboutElems'
import profile from '../../assets/profile-pic.jpg'

const About = ({
    id,
    headline,
    description,
    img,
    alt
}) => {
        const [hover, setHover] = useState(false);
      
        const onHover = () => {
          setHover(!hover);
        };


    return (
        <AboutContainer id={id}>

                <Column1>
                    <TextWrapper>
                    <Heading >{headline} </Heading>
                    <Subtitle> {description} </Subtitle>
                    <HeroBtnWrapper>
                    <Button
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        href={profile}
                    >
                      Download Resume {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                  </HeroBtnWrapper>
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
