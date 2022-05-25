import React from 'react'
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Categoriesnav from '../components/Categoriesnav';
import NameSection from '../components/NestedCategory/NameSection';
import ProuductsSlider from '../components/HomeC/ProuductsSlider/ProuductsSlider';
import { DealsProduct } from '../constants';
import Brands from '../components/HomeC/Brands/Brands';
import Footer from '../components/Footer';

const Container = styled.div`
`

const Wraper = styled.div`
height: 100vh;
`

const Nested = () => {
  return (
    <Container>
        <Wraper>
                <Navbar />
                <Categoriesnav />
                <NameSection />
                <ProuductsSlider keyword="Samsung" lst={DealsProduct}/>
                <ProuductsSlider keyword="Huawie" lst={DealsProduct}/>
                <ProuductsSlider keyword="Lenovo" lst={DealsProduct}/>
                <ProuductsSlider keyword="Apple" lst={DealsProduct}/>
                <ProuductsSlider keyword="Xaoimi" lst={DealsProduct}/>
                <Brands />
                <Footer />
        </Wraper>
    </Container>
  )
}

export default Nested