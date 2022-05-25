import React from 'react'
import styled from 'styled-components';
import Category from './Category';
import { ShopByArray } from '../../../constants';
import { mobile , tablet,laptop } from '../../../responsive';
import { SiteMargin } from '../../../constants';

const Container = styled.div`
width:${SiteMargin}%;
margin : auto;
`
const Wrapper = styled.div`
display:flex;
flex-direction:column;
`


const ShopBy = () => {
  return (
    <Container>
        <Wrapper>
            {ShopByArray.map(it => {
                return(
                    <Category key={it.id} item={it}/>
                )
            })}
        </Wrapper>
    </Container>
  )
}

export default ShopBy