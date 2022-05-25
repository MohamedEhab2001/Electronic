import React from 'react'
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { SiteMargin ,CtPhotos} from '../../constants';
import GridCatComp from './GridCatComp';
import {mobile , tablet} from "../../responsive"

const Container = styled.div`
width:${SiteMargin}%;
margin:auto;
${tablet ({
  display:"none"
})}
${mobile ({
  display:"none"
})}
`

const Wrapper = styled.div`
width:100%;
display:flex;
flex-direction:column;
background-color:white;
padding:5px;
margin:10px auto;
`

const Title = styled.p``
const SliderContainer = styled.div``
const GridSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows : false,
        responsive: [
            {
              breakpoint: 1450,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
    <Container>
        <Wrapper>
            <Title>You can also explore</Title>
            <SliderContainer>
                    <Slider {...settings}>
                        {CtPhotos.map(e => {
                            return <GridCatComp key={e.id} srcLink={e.img} name={e.title}/>
                        })}
                    </Slider>
            </SliderContainer>
        </Wrapper>
    </Container>
  )
}

export default GridSlider