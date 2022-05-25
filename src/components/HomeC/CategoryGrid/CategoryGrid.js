import React from 'react'
import styled from 'styled-components';
import { SiteMargin } from '../../../constants';
import { CtPhotos , colorsRandomly } from '../../../constants';
import { mobile , tablet , laptop } from '../../../responsive'

const Container = styled.div`
width:${SiteMargin}%;
margin:10px auto 0px auto;
${mobile ({
  display : "none",
})}

${tablet ({
  display : "none",
})}
`
const Wrapper = styled.div`
width:100%;
display:grid;
grid-template-columns:repeat(10,10%);
`
const OneCat = styled.a`
margin : 0px 10px;
height:200px;
display:flex;
flex-direction:column;
text-decoration:none;
color:black;
`
const ImageContainer = styled.div`
height:135px;
padding:10px;
display:flex;
`
const ImageCircle = styled.div`
width:100%;
height:100%;
margin :auto;
background-color:${props => props.bg};
border-radius:50%;
display:flex;
`

const Image = styled.img`
margin:auto;
width:70%;
`

const TextContainer = styled.div`
text-align:center
`

                 //


const CategoryGrid = () => {
  const ReturnCats = (arr) => {
    let cats = []
    for(let i =0; i < 10; i++){
          if(arr[i] != null){
            cats.push(
              <OneCat key={arr[i].id} href='#'>
              <ImageContainer>
                <ImageCircle bg={colorsRandomly[Math.floor(Math.random() * 10)]}>
                <Image src={arr[i].img}/>
                </ImageCircle>
              </ImageContainer>
              <TextContainer>{arr[i].title}</TextContainer>
            </OneCat>
            )
          }
    }
    return cats
  }
  return (
    <Container>
        <Wrapper>
        {ReturnCats(CtPhotos)}
        </Wrapper>
    </Container>
  )
}

export default CategoryGrid