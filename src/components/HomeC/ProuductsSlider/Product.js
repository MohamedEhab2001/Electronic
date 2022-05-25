import React from 'react'
import styled from 'styled-components';
import Rating from '@mui/material/Rating';
import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
  } from "@mui/icons-material";

const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.2);
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
z-index:100;
padding: 0px 5px;
`;

const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
transform:translate(0px,20px);
transition: all 0.5s ease;
cursor: pointer;
&:hover {
  background-color: #e9f5f5;
  transform: scale(1.1);
}
`;

const Container = styled.div`
margin: 30px;
position:relative;
&:hover ${Icon}{
  transform: translate(0px,0px);
}
&:hover ${Info}{
    opacity: 1;
  }
`

const Wrapper = styled.div`
width:100%;
padding : 5px;
display:flex;
flex-direction:column;
background-color:white;
align-items:center;
justify-contents : center;
`

const ImageDiv = styled.div`
display:flex;
align-items:center;
justify-contents : center;
height:200px
`

const Image = styled.img`
width:70%;
margin:auto;
object-fit:cover;
`
const Sale = styled.div`
width:40px;
height:40px;
background-color:red;
position:absolute;
top: -10px;
left: -10px;
border-radius:50%;
display:flex;
z-index:101;
`

const SaleRange = styled.p`
color:white;
margin:auto;
font-weight:bold;
`

const TitleDiv = styled.div`
display:flex;
justify-content:center;
flex:1;
width:100%;
padding:0px 15px;
text-align:center;
`
const LinkToGO = styled.p`
font-weight:bold;
font-size : 1em;
color : black;
text-decoration:none;
transition : all .3s ease-in-out;
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;
`
const PriceDiv = styled.div`
display:flex;
width: 100%;
justify-content:center;
flex:1;
`
const Price = styled.span`
font-weight:400;
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

const RatingDiv = styled.div`
flex:1;
display:flex;
width: 100%;
justify-content:center;
`

const Product = ({ deal , item }) => {
  return (
    <Container>
        <Wrapper>
            <ImageDiv>
                <Image src={item.img}/>
            </ImageDiv>
            <TitleDiv>
                <LinkToGO href='#'>
                    {item.name}
                </LinkToGO>
            </TitleDiv>
            <PriceDiv>
                <Price>
                    {item.price}
                    {deal ?  "|" : ""}
                    {deal ?  <OldPrice>${item.oldPrice}</OldPrice> : ""}
                </Price>
            </PriceDiv>
            <RatingDiv>
                <Rating name='half-rating-read' defaultValue={3.5} precision={0.5} readOnly />
            </RatingDiv>
        </Wrapper>
        <Info>
          <Icon>
            <ShoppingCartOutlined />
          </Icon>
          <Icon>
            <SearchOutlined />
          </Icon>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </Info>
        {deal ? <Sale><SaleRange>{item.sale}</SaleRange></Sale> : ""}
    </Container>
  )
}

export default Product