import React, {useState} from 'react'
import Contact from '../components/contactSection';
import HeroSection from '../components/herosection';
import NavBar from '../components/navbar/index'
import Portfolio from '../components/portfolioSection';
import Sidebar from '../components/sidebar'
import SkillSection from '../components/skillsSection';
const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };

    return (
        <div>
            <NavBar toggle={toggle}  />
            <Sidebar isOpen={isOpen} toggle={toggle}  />
            <HeroSection />
            <Portfolio />
            <SkillSection />
            <Contact />
        </div>
    )
}

export default Home
