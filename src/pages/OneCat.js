import React from 'react'
import styled from 'styled-components';
import Annoucment from '../components/OneCategory/Annoucment';
import Navbar from '../components/Navbar';
import Categoriesnav from '../components/Categoriesnav';
import GridSlider from '../components/OneCategory/GridSlider';
import Main from '../components/OneCategory/Main';
import ProuductsSlider from '../components/HomeC/ProuductsSlider/ProuductsSlider';
import { DealsProduct } from '../constants';
import Footer from '../components/Footer';
const Container = styled.div`
`

const OneCat = () => {
  return (
    <Container>
        <Navbar />
        <Categoriesnav />
        <Annoucment />
        <GridSlider />
        <Main />
        <ProuductsSlider keyword="Similiar" lst={DealsProduct}/>
        <ProuductsSlider keyword="Top Rated" lst={DealsProduct}/>
        <Footer />
    </Container>
  )
}

export default OneCat