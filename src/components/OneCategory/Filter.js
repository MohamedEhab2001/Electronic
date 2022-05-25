import React  from 'react'
import styled from 'styled-components';
import DiscountFilter from './FiltersComponents/DiscountFilter';
import PriceFilter from './FiltersComponents/PriceFilter';
import RatingFilter from './FiltersComponents/RatingFilter';
import TextFilter from './FiltersComponents/TextFilter'
const Container = styled.div`
`


const Wrapper = styled.div`
display : flex; 
flex-direction:column;
padding:10px;
`

const Filter = ({type}) => {

  return (
    <Container>
        <Wrapper>
            <PriceFilter />
            <RatingFilter />
            <TextFilter title="BRANDS"/>
            <DiscountFilter />
        </Wrapper>
    </Container>
  )
}

export default Filter