import React from 'react'
import styled from 'styled-components';
import Rating from '@mui/material/Rating';
import { colorsPalette} from '../../constants';
import { style } from '@mui/system';
const Container = styled.div`
`

const Wrapper = styled.div`
display:flex;
flex-direction:column;
`

const ProductName = styled.p`
font-weight:900;
font-size:30px;
`
const Div = styled.div`
display:flex;
align-items:center;
`
const ProductPrice = styled.p`
color:${colorsPalette['4']};
font-size:20px;
font-wieght:800;
margin:0;
`

const Small = styled.small`
margin-left:10px;
color:#b9b9b9;
`
const ProductAnchor = styled.a`
color:#b1b1b1;
margin-left:10px;
font-size:12px;
text-decoration:none;
transition : all .2s ease-in-out;
&:hover{
    color:${colorsPalette['4']};
    padding-bottom:1px;
    border-bottom: 1px solid #b1b1b1;
}
`

const Pdetails = () => {
  return (
    <Container>
        <Wrapper>
            <ProductName>
            Acer Nitro 5 AN515-55-53E5 Gaming Laptop | Intel Core i5-10300H | NVIDIA GeForce RTX 3050 Laptop GPU | 15.6 FHD 144Hz IPS Display | 8GB DDR4 | 256GB NVMe SSD | Intel Wi-Fi 6 | Backlit Keyboard 
            </ProductName>
            <Div>
               <Rating name="disabled" disabled value={5}/> 
               <Small>
               (3 reviews)   
                </Small>
                <ProductAnchor href='#'>
                    Write review
                </ProductAnchor>
            </Div>
            <Div>
            <p style={{"fontSize" : "12px"}}>
               Model number : #2563bn89d2v3  
            </p>
            </Div>
            <Div>
                <ProductPrice>EGP15000</ProductPrice>
            </Div>
            <Div>
            <p style={{"fontSize" : "12px","color" : "green"}}>
            Order now and get it around Monday, April 11 
            </p>
            </Div>
        </Wrapper>
    </Container>
  )
}

export default Pdetails