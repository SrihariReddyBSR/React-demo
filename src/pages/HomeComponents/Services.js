import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from 'react'

import img1 from '../../assets/slide-1.jpg'
import img2 from '../../assets/slide-2.jpg'
import img3 from '../../assets/slide-3.jpg'
import img4 from '../../assets/slide-4.jpg'

const Services = () => {

  const images = [img1, img2, img3, img4];

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <>
    <h1 className='heading'>Services</h1>

    <section className='services'>

    <Slider {...settings}>

      {
        images.map((image) => {
          return(
            <div key={image}>
              <img src={image} alt="name"/>
            </div>
          )
        })
      }

      {/* <div>
        <img src={img1} alt="slide-1" />
      </div>
      <div>
        <img src={img2} alt="slide-2" />
      </div>
      <div>
        <img src={img3} alt="slide-3" />
      </div>
      <div>
        <img src={img4} alt="slide-4" />
      </div> */}
    </Slider>

    </section>
    </>
  )
}

export default Services