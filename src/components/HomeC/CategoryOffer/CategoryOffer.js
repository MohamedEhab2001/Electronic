import React from 'react'
import styled from 'styled-components';
import { mobile , tablet,laptop } from '../../../responsive';
import { SiteMargin } from '../../../constants';

const Container = styled.div`
width:${SiteMargin}%;
margin:15px auto;
${tablet ({
    width:"85%"
  })}
  ${mobile ({
    width:"95%"
  })}
`

const Wrapper = styled.div`
display : grid;
width:100%;
height:100%;
grid-template-areas :
"m m m m o o"
"w w h h f f"
;
grid-auto-rows : minmax(320px , 320px);
grid-gap: 10px;
${tablet ({
    gridAutoRows:'minmax(250px , 250px)',
    gridTemplateAreas : `
    "m m m m m m"
    "o o o w w w"
    "h h h f f f"
    `
  
  })}
  ${mobile ({
    gridAutoRows:'minmax(200px , 200px)',
    gridTemplateAreas : `
    "m m m m m m"
    "o o o w w w"
    "h h h f f f"
    `
  })}
`

const Main = styled.div`
grid-area : m;
background-image : url(${props => props.img});
background-size : 100% 100%;
`

const One = styled.div`
grid-area : o;
background-image : url(${props => props.img});
background-size : 100% 100%;

`

const Two = styled.div`
grid-area : w;
background-image : url(${props => props.img});
background-size : 100% 100%;

`
const Three = styled.div`
grid-area : h;
background-image : url(${props => props.img});
background-size : 100% 100%;

`
const Four = styled.div`
grid-area : f;
background-image : url(${props => props.img});
background-size : 100% 100%;
`

const AnchorDiv = styled.a`
`

const FillDiv = styled.div`
width:100%;
height:100%;
`

const CategoryOffer = () => {
  return (
    <Container>
        <Wrapper>
                <Main img="https://smhttp-ssl-73217.nexcesscdn.net/pub/media/wysiwyg/Jan_2022/Mobiletablet_ar_web.jpg">
                        <AnchorDiv href="#">
                            <FillDiv />
                        </AnchorDiv>
                </Main>
                <One img="https://smhttp-ssl-73217.nexcesscdn.net/pub/media/wysiwyg/Jan_2022/Headphones_ar_web.jpg">
                        <AnchorDiv href="#">
                            <FillDiv />
                        </AnchorDiv>
                </One>
                <Two img="https://smhttp-ssl-73217.nexcesscdn.net/pub/media/wysiwyg/Jan_2022/werables_ar_web.jpg">
                        <AnchorDiv href="#">
                            <FillDiv />
                        </AnchorDiv>
                </Two>
                <Three img="https://smhttp-ssl-73217.nexcesscdn.net/pub/media/wysiwyg/Jan_2022/tws_ar_web_new.jpg">
                        <AnchorDiv href="#">
                            <FillDiv />
                        </AnchorDiv>
                </Three>
                <Four img="https://smhttp-ssl-73217.nexcesscdn.net/pub/media/wysiwyg/Jan_2022/chargers_ar_web_new.jpg">
                        <AnchorDiv href="#">
                            <FillDiv />
                        </AnchorDiv>
                </Four>
        </Wrapper>
    </Container>
  )
}

export default CategoryOffer