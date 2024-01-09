import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


function Hero() {
    return (
      
        

        <Carousel
        showArrows={true}
  showThumbs={true}
  infiniteLoop={true}
  autoPlay={true}
  interval={3000}
  >
      <div>
        <img src="./images/banner-25.jpg" alt="Image 1" />
      </div>
      <div>
        <img src="./images/banner-15.jpg" alt="Image 2" />
      </div>
      <div>
        <img src="./images/téléchargement.jpeg" alt="Image 3" />
      </div>
    </Carousel>
    )
}

export default Hero
