import React from 'react'
import styled from 'styled-components';
import { colorsPalette } from '../../constants';
import {laptop} from '../../responsive'
const Container = styled.div`
height:fit-content;
margin : 0px 5px;
`
const Wrapper = styled.div`
width:100%;
height:100%;
`

const InnerContainer = styled.div`
display:flex;
flex-direction:column
`

const ImageDiv = styled.div`
display:flex;
align-items:center;
justify-contents : center;
height:150px;
background-color:${colorsPalette['3']};

`

const Image = styled.img`
width:50%;
margin:auto;
object-fit:cover;
${laptop({
  width:"30%"
})}
`
const TitleDiv = styled.div`
display:flex;
justify-content:center;
flex:1;
width:100%;
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

const GridCatComp = ({srcLink , name}) => {
  return (
    <Container>
        <Wrapper>
            <InnerContainer>
                    <ImageDiv>
                        <Image src={srcLink}/>
                    </ImageDiv>
                    <TitleDiv>
                        <LinkToGO>
                        {name}
                        </LinkToGO>
                    </TitleDiv>
            </InnerContainer>   
        </Wrapper>
    </Container>
  )
}

export default GridCatComp