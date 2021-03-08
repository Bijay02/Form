

import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


import './hero.scss'

//For customizations
//http://react-responsive-carousel.js.org/storybook/index.html

class Hero extends Component {
    render() {
        return (
            <Carousel emulateTouch autoPlay infiniteLoop dynamicHeight showThumbs={false} showStatus={false} showArrows={false} interval={6000}>
                <div>
                    test
                </div>
            </Carousel>
        );
    }
};

export default Hero;
