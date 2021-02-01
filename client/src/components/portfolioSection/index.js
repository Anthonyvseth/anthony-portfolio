import React from 'react'
import { 
    PortContainer,
    PortH1,
    PortCard,
    PortH2,
    PortP, 
    ImgWrap, 
    Img,
    PortLink, PortWrapper, LinkWrap
 } from './PortfolioElems'
 import project1 from '../../assets/project1.gif'

const Portfolio = ({ id }) => {

    function gitStudioGhibli() {
        window.open('https://github.com/Anthonyvseth/Studio-Ghibli-API')
      }

    return (
        <PortContainer id={id}>
            <PortH1>Portfolio</PortH1>
            <PortWrapper>
            <PortCard>
                <ImgWrap>
                    <Img src={project1}/>
                </ImgWrap>
                <PortH2>Studio Ghibli Movies</PortH2>
                <PortP>The very first deployed project I have ever created. It is very important to me because it shows this because it shows how much growth I have gained since I began my software engineering journey.</PortP>
                <LinkWrap>
                    <PortLink onClick={gitStudioGhibli}>GitHub</PortLink>
                    <PortLink onClick={gitStudioGhibli}>Website</PortLink>
                </LinkWrap>
            </PortCard>
            </PortWrapper>
        </PortContainer>
    )
}

export default Portfolio
