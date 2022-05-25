import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import { SiteMargin } from '../../../constants';
import { mobile , tablet , laptop } from '../../../responsive'

const Container = styled.div`
width:${SiteMargin}%;
margin:10px auto;
${mobile ({
  margin : "20px auto"
})}

${tablet ({
  margin : "20px auto"
})}
`

const Wrapper = styled.div`
width:100%;
height:300px;
background-image:url(${props => props.url});
${mobile ({
  height:"90px",
  backgroundSize : "100% 100%"
})}

${tablet ({
  height:"140px",
  backgroundSize : "100% 100%"
})}
`

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay : true,
    autoplaySpeed : 5000,
    arrows: false
  };
const SliderSection = () => {
  return (
    <Container>
        <Slider {...settings}>
            <Wrapper url="https://k.nooncdn.com/cms/pages/20220226/0a7afb9f521de1818cbcbb1d5ec122a2/en_banner-01.png"/>
            <Wrapper url="https://k.nooncdn.com/cms/pages/20220228/ac5d9f7fff95e93c0b55095eda04df25/en_slider-01.png"/>
            <Wrapper url="https://k.nooncdn.com/cms/pages/20220301/1dc094a1f3485c5692c2fd48968acd9f/en_banner-01.gif"/>
        </Slider>
    </Container>
  )
}

export default SliderSection