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
 import project3 from '../../assets/project3.gif'
 import project4 from '../../assets/project4.gif'
 import project5 from '../../assets/project5.gif'

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

    function gitCakeBlog() {
        window.open('https://github.com/Anthonyvseth/cake_baker_blog')
      }
    function cakeBlog() {
        window.open('https://cake-baker-blog.herokuapp.com/')
      }

    function gitLifeLesson() {
        window.open('https://github.com/Anthonyvseth/React-Redux-Firebase-App')
      }
    function lifeLesson() {
        window.open('https://life-lesson-share-app.web.app/')
      }

      function gitPgt() {
        window.open('https://github.com/Anthonyvseth/personal-growth-tracker')
      }


    return (
        <PortContainer id={id}>
            <PortH1>Portfolio</PortH1>
            <PortWrapper>
            <PortCard>
                <ImgWrap>
                    <Img src={project5}/>
                </ImgWrap>
                <PortH2>Personal Growth Tracker</PortH2>
                <PortP>A work in progress, PERN fullstack site for a user to log and track personal goals and accomplishments. Also includes a section for users to write personal affirmations.</PortP>
                <LinkWrap>
                    <PortLink onClick={gitPgt}>Code</PortLink>
                </LinkWrap>
            </PortCard>
            <PortCard>
                <ImgWrap>
                    <Img src={project4}/>
                </ImgWrap>
                <PortH2>Life Lessons</PortH2>
                <PortP>A Site for individuals to share any life lesson they've learned. Once signed in you can view all the posts created by every user. A react, redux, firebase application.</PortP>
                <LinkWrap>
                    <PortLink onClick={gitLifeLesson}>Code</PortLink>
                    <PortLink onClick={lifeLesson}>Site</PortLink>
                </LinkWrap>
            </PortCard>
            <PortCard>
                <ImgWrap>
                    <Img src={project3}/>
                </ImgWrap>
                <PortH2>Cake Baker Blog</PortH2>
                <PortP>Created for my partner who runs a small buisness. A prototype site for her to share each one of her cake creations along with a description where users are able to interact on each post by commenting. MERN fullstack app with full crud.</PortP>
                <LinkWrap>
                    <PortLink onClick={gitCakeBlog}>Code</PortLink>
                    <PortLink onClick={cakeBlog}>Site</PortLink>
                </LinkWrap>
            </PortCard>
            <PortCard>
                <ImgWrap>
                    <Img src={project2}/>
                </ImgWrap>
                <PortH2>Make Your Day</PortH2>
                <PortP>Collaborative project based on google extension called 'Momentun'. My main objective within the project was frontend work with react. PERN fullstack app.</PortP>
                <LinkWrap>
                    <PortLink onClick={gitMakeYourDay}>Code</PortLink>
                    <PortLink onClick={makeYourDay}>Site</PortLink>
                </LinkWrap>
            </PortCard>
            <PortCard>
                <ImgWrap>
                    <Img src={project1}/>
                </ImgWrap>
                <PortH2>Studio Ghibli Movies</PortH2>
                <PortP>My very first deployed project I've created. This project holds value to me because it shows how much growth I've gained since I began my software engineering journey.</PortP>
                <LinkWrap>
                    <PortLink onClick={gitStudioGhibli}>Code</PortLink>
                    <PortLink onClick={StudioGhibli}>Site</PortLink>
                </LinkWrap>
            </PortCard>
            </PortWrapper>
        </PortContainer>
    )
}

export default Portfolio
