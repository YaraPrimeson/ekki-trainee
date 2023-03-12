import EkkiBoutiqeu from "../Components/Home/HomeEkkiBoutiqeu"
import HomePlaska from "../Components/Home/HomePlaska"
import HomeAboutUs from "../Components/Home/HomeAboutUs"
import React from 'react'
import Carousel from "../Components/Carousel"



const Home = () =>{
    return(
        <>
                <EkkiBoutiqeu/>
                <HomePlaska/>
                <Carousel/>
                <HomeAboutUs/>
        </>
    )
}

export default Home;
