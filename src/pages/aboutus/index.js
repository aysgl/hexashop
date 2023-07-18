import React from 'react'
import OurTeam from '../../components/about/ourteam'
import OurService from '../../components/about/ourservice'
import Newsletter from '../../components/newsletter'
import About from '../../components/about/about'
import Jumbotron from '../../components/jumbotron'

const AboutUs = () => {
    return (
        <>
            <Jumbotron title="About Our Company" description="Awesome, clean & creative HTML5 Template" className="about-page-heading" />
            <About />
            <OurTeam />
            <OurService />
            <Newsletter />
        </>
    )
}

export default AboutUs