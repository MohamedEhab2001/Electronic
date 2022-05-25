import React from 'react'
import styled from 'styled-components';
import i18n from "../../../i18n"
import { useTranslation } from "react-i18next"
import { mobile , tablet,laptop } from '../../../responsive';


const Container = styled.div`
flex:1;
background-color:white;
margin:10px 5px;
height:120px;
`
const H3 = styled.h3`
padding: 0px 5px;
`
const WrapperAnchor = styled.a`
color:black;
text-decoration:none;
`
const Wrapper = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center;
`
const ProductDiv = styled.div`
padding:10px;
display:flex;
flex:1;
align-items:center;
justify-content:center;
flex-direction:column;
`

const Img = styled.img`
width:50%;
margin:auto
`

const Category = ({item}) => {
  const {t} = useTranslation()
  return (
    <Container>
        <H3>
            {t("explorthis" , {"category" : item.name})}
        </H3>
        <WrapperAnchor href='#'>
        <Wrapper>
            {item.subs.map(it => {
                return(
                <ProductDiv key={it.id}>
                    <Img src={it.img}/>
                    <p>{it.name}</p>
                </ProductDiv>
                )
            })}
        </Wrapper>
        </WrapperAnchor>
    </Container>
  )
}

export default Category