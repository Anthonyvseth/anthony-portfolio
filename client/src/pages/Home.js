import React, {useState} from 'react'
import HeroSection from '../components/herosection';
import NavBar from '../components/navbar/index'
import Sidebar from '../components/sidebar'
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
        </div>
    )
}

export default Home
