import React from 'react'
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ReactImageMagnify from 'react-image-magnify';


const Container = styled.div`
height:100%;
`

const Wrapper = styled.div`
display:flex;
height:100%;
overflow:hidden;
`

const ImageDiv = styled.div`
flex:12;
margin:5px;
background-color:${props => props.c};
overflow:hidden;

`
const Img = styled.img`
width:100%;
height:100%;
` 

const ImgS = styled.img`
width:100%;
`   
const SliderDiv = styled.div`
flex:2;
margin:5px;
background-color:${props => props.c};
display:flex;
flex-direction:column;
overflow: hidden;
`

const OneImage = styled.div`
width:100%;
height:100px;
margin:2px;
background-color:${props => props.c};
cursor:pointer;
opacity:.8;
&:hover{
    opacity:1;
}
`
const Pimages = () => {
    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        arrows:false,
        verticalSwiping: true,
        beforeChange: function(currentSlide, nextSlide) {
          console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function(currentSlide) {
          console.log("after change", currentSlide);
        }
      };
  
  return (
    <Container>
        <Wrapper>
        <SliderDiv  c={"transparent"}>
        <Slider {...settings}>
            <OneImage c={"transparent"}>
                <ImgS src='https://m.media-amazon.com/images/I/71gtHtMramS._AC_SL1500_.jpg'/>
            </OneImage>
            <OneImage c={"transparent"}>
                <ImgS src={"https://m.media-amazon.com/images/I/71nim+DaEBS._AC_SL1500_.jpg"}/>
            </OneImage>
        </Slider>

        </SliderDiv>
        <ImageDiv  c={"transparent"}>
                    <ReactImageMagnify {...{
                            enlargedImagePosition : "over",
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: 'https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_SL1500_.jpg',
                            },
                            largeImage: {
                                src: 'https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_SL1500_.jpg',
                                width:1300,
                                height:1300
                            }
            }} />
        </ImageDiv>
        </Wrapper>
    </Container>
  )
}

export default Pimages