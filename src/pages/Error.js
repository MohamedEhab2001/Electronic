import React from 'react'
import styled from 'styled-components'
import { colorsPalette } from "../constants";


const Container = styled.div`
background-color : ${colorsPalette['4']};
display:flex;
align-items:center;
justify-content:center;
height:100vh;
`
const Text = styled.h1`
color:white;
font-size:40px;
font-weight:800;
`
const Error = () => {
    return (
        <Container>
            <Text>404 PAGE NOT FOUND!!!</Text>
        </Container>
    )
}

export default Error
