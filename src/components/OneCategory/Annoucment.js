import React from 'react'
import styled from 'styled-components';
import { colorsPalette } from '../../constants';

const Container = styled.div`
background-color:${colorsPalette['4']};
text-align:center;
padding:5px;
color:white
`

const Annoucment = () => {
  return (
    <Container>
        UP TO 70% IN THIS CATEGORY
    </Container>
  )
}

export default Annoucment