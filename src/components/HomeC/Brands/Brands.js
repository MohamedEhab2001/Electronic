import React from 'react'
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import OneBrands from './OneBrands';
import i18n from "../../../i18n"
import { useTranslation } from "react-i18next"
import { BrandsArray } from '../../../constants';
import { SiteMargin } from '../../../constants';

const Container = styled.div`
width:${SiteMargin}%;
margin:15px auto;
`
const Title = styled.div`display:flex; flex:1; justify-content:flex-start; align-items: center`
const TitleText = styled.h2``


const Brands = () => {
    const {t} = useTranslation()
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        arrows : false,
        responsive: [
            {
              breakpoint: 1450,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
              }
            }
          ]
      };
  return (
    <Container>
        <Title>
            <TitleText>
                {t("shopbybrand")}
            </TitleText>
        </Title>
        <Slider {...settings}>
            {BrandsArray.map(e => {
                return(
                    <OneBrands key={e.id} img={e.img}/>
                )
            })}
        </Slider>
    </Container>
  )
}

export default Brands