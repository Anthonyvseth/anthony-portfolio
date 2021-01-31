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
                <PortP>This project is my very first Project that I deployed. I like to show this because I have come along way from this creation and I can look back at how much I have progressed.</PortP>
                <LinkWrap>
                    <PortLink onClick={gitStudioGhibli}>GitHub</PortLink>
                    <PortLink onClick={gitStudioGhibli}>Website</PortLink>
                </LinkWrap>
            </PortCard>
            <PortCard>
                <ImgWrap>
                    <Img src={project1}/>
                </ImgWrap>
                <PortH2>Studio Ghibli Movies</PortH2>
                <PortP>This project is my very first Project that I deployed. I like to show this because I have come along way from this creation and I can look back at how much I have progressed.</PortP>
                <LinkWrap>
                    <PortLink onClick={gitStudioGhibli}>GitHub</PortLink>
                    <PortLink onClick={gitStudioGhibli}>Website</PortLink>
                </LinkWrap>
            </PortCard>
            <PortCard>
                <ImgWrap>
                    <Img src={project1}/>
                </ImgWrap>
                <PortH2>Studio Ghibli Movies</PortH2>
                <PortP>This project is my very first Project that I deployed. I like to show this because I have come along way from this creation and I can look back at how much I have progressed.</PortP>
                <LinkWrap>
                    <PortLink onClick={gitStudioGhibli}>GitHub</PortLink>
                    <PortLink onClick={gitStudioGhibli}>Website</PortLink>
                </LinkWrap>
            </PortCard>
            <PortCard>
                <ImgWrap>
                    <Img src={project1}/>
                </ImgWrap>
                <PortH2>Studio Ghibli Movies</PortH2>
                <PortP>This project is my very first Project that I deployed. I like to show this because I have come along way from this creation and I can look back at how much I have progressed.</PortP>
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
