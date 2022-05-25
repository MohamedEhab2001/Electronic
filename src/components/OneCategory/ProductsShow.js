import React from 'react'
import styled from 'styled-components';
import { DealsProduct} from '../../constants';
import ProductCard from './ProductCard';
import {mobile , tablet} from "../../responsive"
const Container = styled.div`
`


const Wrapper = styled.div`
display: grid;
grid-template-columns: repeat(5,20%);
padding:10px;
${tablet ({
  display:'grid',
  gridTemplateColumns : "repeat(2,50%)",
  padding:"10px"

})}
${mobile ({
  display:'flex',
  flexDirection : "column",
  padding:"10px"
})}
`
const ProductsShow = () => {
  return (
    <Container>
        <Wrapper>
                {DealsProduct.map(item => {
                    return(
                        <ProductCard key={item.id} img={item.img} name={item.name} price={item.price} deal oldPrice={item.oldPrice}/>
                    )
                })}
        </Wrapper>
    </Container>
  )
}

export default ProductsShow