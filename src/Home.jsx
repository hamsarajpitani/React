import React from 'react';
import pic from './img/image1.svg'
import Common from './Common';


const Home = ()=>{

    return (
            <Common
             name="Welcome to Home Page"
             btnname="Get in Services"
             visit= "/services"
             imgsrc={pic}
             />
    )

}

export default Home;