import { Rating } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import { colorsPalette } from '../../constants';
import {mobile , tablet} from "../../responsive"

const Container = styled.div`
`


const Wrapper = styled.div`
display:flex;
flex-direction:column;
padding:5px;
margin : 5px;
`

const ImageContainer = styled.div`
height:200px;
overflow:hidden;
display:flex;
background-color:#f7f7f7;
`

const Image = styled.img`
margin:auto;
height:auto;
width:50%;
${tablet ({
    width:"40%"
  })}
  ${mobile ({
    width:"40%"
  })}
`

const TitleDiv = styled.div`
display:flex;
justify-content:center;
flex:1;
text-align:center;
width:100%;
`
const LinkToGO = styled.p`
font-size : 12px;
color : black;
text-decoration:none;
transition : all .3s ease-in-out;
height:25px;
overflow:hidden;
`
const PriceDiv = styled.div`
display:flex;
width: 100%;
justify-content:center;
flex:1;
padding : 5px;
`

const Price = styled.span`
font-weight:600;
font-size : 1em;
color : black;
margin-left:3px;
margin-right:3px;
margin-bottom:5px;
`

const OldPrice = styled.span`
font-weight:400;
font-size : 1em;
color : gray;
text-decoration: line-through;
margin-left:3px;
margin-right:3px;
`

const OperationsDiv = styled.div`
display:flex;
width: 100%;
margin : 5px auto;
justify-content:space-around;

`
const BuDiv = styled.div`
flex:1;
display:flex;
${tablet ({
    justifyContent:"center"
  })}
  ${mobile ({
    justifyContent:"center"
  })}
`
const Button = styled.button`
border:none;
background-color:${colorsPalette['4']};
padding:5px;
color:white;
cursor:pointer;
border-radius:2px;
`
const RatingDiv = styled.div`
display:flex;
width: 100%;
justify-content:center;
`
const ProductCard = ({img , name , price , oldPrice , deal}) => {
  return (
    <Container>
        <Wrapper>
                <ImageContainer>
                    <Image src={img}/>
                </ImageContainer>
                <TitleDiv>
                <LinkToGO href='#'>
                    {name}
                </LinkToGO>
            </TitleDiv>
            <hr style={{"width" : "100%" , "margin" : "0px auto"}} />
            <PriceDiv>
                <Price>
                    {price}
                    {deal ?  "|" : ""}
                    {deal ?  <OldPrice>${oldPrice}</OldPrice> : ""}
                </Price>
            </PriceDiv>
            <hr style={{"width" : "100%" , "margin" : "0px auto"}} />
            <RatingDiv>
                <Rating name='half-rating-read' defaultValue={3.5} precision={0.5} readOnly />
            </RatingDiv>
            <OperationsDiv>
                <BuDiv>
                    <Button>
                        ADD TO CART
                    </Button>
                </BuDiv>
                <BuDiv>
                    <Button>
                        ADD TO WISHLIST
                    </Button>
                </BuDiv>
            </OperationsDiv>
        </Wrapper>
    </Container>
  )
}

export default ProductCard