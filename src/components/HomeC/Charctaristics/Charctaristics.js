import React from 'react'
import styled from 'styled-components';
import { SiteMargin } from '../../../constants';
import { mobile , tablet , laptop } from '../../../responsive'

const Container = styled.div`
width:${SiteMargin}%;
margin:10px auto;
${mobile ({
  display:"none"
})}

${tablet ({
  display:"none"
})}
`
const Wrapper = styled.div`
display:flex;
`

const ImageDiv = styled.a`
flex:1;
height:100px;
margin:0px 10px;
background-image:url(${props => props.url});
background-size : 100% 100%;
`
//background-image:url(${props => props.url});
const Charctaristics = () => {
  return (
    <Container>
        <Wrapper>
            <ImageDiv url="https://www.rayashop.com/media/amasty/bannerslider/SHA-Mother-day---520-82-EN.jpg"/>
            <ImageDiv url="https://www.rayashop.com/media/amasty/bannerslider/Raya_New-12.jpg"/>
            <ImageDiv url="https://eg.jumia.is/cms/7-22/JumiaExpress/Main/Jumia_Express_-1152x252_-EN.jpg"/>
        </Wrapper>
    </Container>
  )
}

export default Charctaristics