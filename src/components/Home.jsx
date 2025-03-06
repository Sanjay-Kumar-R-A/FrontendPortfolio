import React from 'react'
import { NavBar } from './NavBar'
import { Banner } from "./Banner";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import Title from './Title';

import BackToTop from './BackToTop';

const Home = () => {
    return (
        <>
            <NavBar />
            <Title />
            <Banner />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
            <BackToTop />
        </>
    )
}

export default Home
