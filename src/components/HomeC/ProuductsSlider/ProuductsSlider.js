import React from 'react'
import styled from 'styled-components';
import { ReturnArrow } from '../../../constants';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Product from "./Product"
import i18n from "../../../i18n"
import { useTranslation } from "react-i18next"
import { colorsPalette } from '../../../constants';
import { SiteMargin } from '../../../constants';
import { mobile , tablet , laptop } from '../../../responsive'

const Container = styled.div`
width:${SiteMargin}%;
margin:auto;
`
const Wrapper = styled.div`
width:100%;
display:flex;
flex-direction:column;
`

const Begin = styled.div`
display:flex;
`

const Title = styled.div`display:flex; flex:1; justify-content:flex-start; align-items: center;`
const TitleCon = styled.div`
display:flex; 
justify-content:flex-start;
align-items: center;
background-color:${colorsPalette['5']};
padding: 15px;
border-radius: 0px 30px;
width:fit-content;
${mobile ({
  padding : "10px"
})}

${tablet ({
  padding : "10px"
})}
display:flex;

`
const TitleText = styled.h2`
color:white;
margin:auto;
${mobile ({
  fontSize : "15px"
})}

${tablet ({
  fontSize : "15px"
})}
`

const More = styled.div`display:flex; flex:1; justify-content:flex-end;align-items: center;`
const MoreLink = styled.a`
font-weight:400;
font-size : 1em;
color : black;
text-decoration:none;
transition : all .3s ease-in-out;
padding:5px;
&:hover{
    transform:translate(0px, -10px);
}
`
const ProductsContainer = styled.div`
`


const SectionTwo = ({keyword , lst , hideView}) => {
    const {t} = useTranslation()
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
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
            <Begin>
                <Title>
                <TitleCon>
                  <TitleText>
                        {t(keyword)}
                    </TitleText>      
                  </TitleCon>
                </Title>
                <More>
                  {hideView ? '' : <MoreLink href='#'>
                        {t("viewmore")}
                        <i className={"bi bi-chevron-double-"+ReturnArrow()['arrow']}></i>
                    </MoreLink>}

                </More>
            </Begin>
            <ProductsContainer>
            <Slider {...settings}>
                    {lst.map(item => {
                        return(
                            <Product key={item.id} deal={item.sale ? true : false} item={item} />
                        )
                    })}
            </Slider>
            </ProductsContainer>
        </Wrapper>
    </Container>
  )
}
export default SectionTwo