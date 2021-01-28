import React, {useState} from 'react'
import About from '../components/about';
import { aboutOjbOne } from '../components/about/Data';
import Contact from '../components/contactSection';
import HeroSection from '../components/herosection';
import NavBar from '../components/navbar/index'
import Portfolio from '../components/portfolioSection';
import Sidebar from '../components/sidebar'
import SkillSection from '../components/skillsSection';
import {aboutObjOne} from '../components/about/Data'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };

    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle}  />
            <NavBar toggle={toggle}  />
            <HeroSection />
            <About {...aboutObjOne} />
            <Portfolio />
            <SkillSection />
            <Contact />
        </div>
    )
}

export default Home