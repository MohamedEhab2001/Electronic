import React from 'react'
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Categoriesnav from '../components/Categoriesnav';
import BreadCrumb from '../components/ProducsDetailsC/BreadCrumb'
import Upper from '../components/ProducsDetailsC/Upper';
const Container = styled.div`
`
const Wrapper = styled.div`
width:80%;
margin:auto;

`
const ProductDetails = () => {
  return (
    <Container>
        <Navbar />
        <Categoriesnav />
        <Wrapper>
            <BreadCrumb />
            <Upper />
        </Wrapper>
    </Container>
  )
}

export default ProductDetails