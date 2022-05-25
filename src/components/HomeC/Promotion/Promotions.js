import React from 'react'
import styled from 'styled-components';
import Proms from './Prom';
import { mobile , tablet,laptop } from '../../../responsive';
import { SmallProm } from '../../../constants';
import { SiteMargin } from '../../../constants';

const Container = styled.div`
width:${SiteMargin}%;
background-color:white;
margin:15px auto;
`

const Wrapper = styled.div`
height:fit-content;
padding:15px;
position: relative;
display:flex;
${mobile ({
  flexWrap:"wrap"
})}

${tablet ({
  flexWrap:"wrap"
})}
`

const Promotions = () => {
  return (
    <Container>
        <Wrapper >
          {SmallProm.map(e => {
              return(
                <Proms key={e.id} item={e}/>
              );
          })}
        </Wrapper>
    </Container>
  )
}

export default Promotions