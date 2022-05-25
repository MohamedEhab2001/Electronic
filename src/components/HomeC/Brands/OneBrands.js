import React from 'react'
import styled from 'styled-components';
import { colorsPalette } from '../../../constants';
import { mobile , tablet,laptop } from '../../../responsive';

const Container = styled.div`
border : .5px ${colorsPalette["4"]} solid;
border-radius : 10px;
height : 80px;
display : flex;
margin : 0px 15px;
transition: all .5s ease-in-out;
&:hover{
    border : .5px ${colorsPalette["3"]} solid;
}
`

const Image = styled.img`
width : 20%;
margin:auto;
${tablet ({
    width:"40%"
  })}
  ${mobile ({
    width:"45%"
  })}
`

const AnchorDiv = styled.a`
margin:auto;
`

const OneBrands = ({img}) => {
  return (
    <Container>
        <AnchorDiv href="#">
            <Image src={img}/>
        </AnchorDiv>
    </Container>
  )
}

export default OneBrands