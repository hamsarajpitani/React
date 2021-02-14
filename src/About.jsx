import React from 'react';
import Common from './Common';
import pic from './img/image1.svg'


const About = ()=>{

    return (
        <Common
        name="Welcome to About Page"
        btnname="Get in Contact"
        visit= "/contact"
        imgsrc={pic}
        />
    )

}

export default About;