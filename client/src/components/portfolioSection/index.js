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
 import project2 from '../../assets/project2.gif'

const Portfolio = ({ id }) => {

    function gitStudioGhibli() {
        window.open('https://github.com/Anthonyvseth/Studio-Ghibli-API')
      }
      function StudioGhibli() {
        window.open('https://anthonyvseth.github.io/Studio-Ghibli-API/index.html')
      }

    function gitMakeYourDay() {
        window.open('https://github.com/Anthonyvseth/Unit-3-project')
      }
    function makeYourDay() {
        window.open('https://make-your-day-2.herokuapp.com/')
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
                    <PortLink onClick={StudioGhibli}>Website</PortLink>
                </LinkWrap>
            </PortCard>
            <PortCard>
                <ImgWrap>
                    <Img src={project2}/>
                </ImgWrap>
                <PortH2>Make Your Day</PortH2>
                <PortP>Colaborative project based on google extension called 'Momentun'. My main job within the project was frontend work with react.</PortP>
                <LinkWrap>
                    <PortLink onClick={gitMakeYourDay}>GitHub</PortLink>
                    <PortLink onClick={makeYourDay}>Website</PortLink>
                </LinkWrap>
            </PortCard>
            </PortWrapper>
        </PortContainer>
    )
}

export default Portfolio
