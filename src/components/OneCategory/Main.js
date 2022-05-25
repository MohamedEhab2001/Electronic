import React , {useState} from 'react'
import styled from 'styled-components';
import { SiteMargin , colorsPalette} from '../../constants';
import Filter from './Filter';
import {mobile , tablet} from "../../responsive"
import ProductsShow from './ProductsShow';
import FilterListIcon from '@mui/icons-material/FilterList';
const Container = styled.div`
width:${SiteMargin}%;
margin : 5px auto;
`
const Wrapper = styled.div`
display : flex;
gap : 10px;
${tablet ({
  flexDirection:"column",
  alignItems:"center"
})}
${mobile ({
  flexDirection:"column",
  alignItems:"center"
})}
`
const FilterDiv = styled.div`
flex : 2;
background-color:white;
height:fit-content;
position:sticky;
top:10px;
${tablet ({
  display:"none"
})}
${mobile ({
  display:"none"
})}
`

const PruductsDiv = styled.div`
flex : 9;
background-color:white;
height:fit-content;
`

const HeadButton = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content : end;
cursor:pointer;
width:fit-content;
&:hover{
  background-color:${colorsPalette['3']}
}
display:none;
${tablet ({
  display:"flex"
})}
${mobile ({
  display:"flex"
})}
`
const Button = styled.button`
border : none;
padding : 3px;
color : ${colorsPalette['4']};
background-color : transparent;
transition:all .2s ease-in-out;
font-size:13px;
dispay:flex;
align-items:center;
`

const DisplayFilter = styled.div`
position:fixed;
width:100vw;
height:100vh;
background-color:white;
top: 0;
left: 0;
z-index: 3000;
overflow-y:auto;
display:flex;
flex-direction:column;
transform: translate(${props => props.dis}, 0px);
transition:all .5s ease-in-out;
display:none;
${tablet ({
  display:"block"
})}
${mobile ({
  display:"block"
})}
`

const HigherDiv = styled.div`
display:flex;
padding:10px;
`

const Div = styled.div`
flex:1;
display:flex;
justify-content ${props => props.dir};
align-items:center;
`
const Main = () => {
  const [Show,setShow] = useState(true)

  return (
    <Container>
        <Wrapper>
                <FilterDiv>
                    <Filter />
                </FilterDiv>
                <HeadButton onClick={() => {setShow(false)}}>
                <FilterListIcon />
                  <Button>
                    FILTER
                  </Button>
                </HeadButton>
                <PruductsDiv>
                    <ProductsShow />
                </PruductsDiv>
        </Wrapper>
        <DisplayFilter dis={Show ? "100vw" : "0vw"}>
          <HigherDiv>
              <Div dir='strat'>
                  <h1>FILTER</h1>
              </Div>
              <Div dir='end' onClick={() => {setShow(true)}}>
                  <span>X</span>
              </Div>
          </HigherDiv>
             <Filter />
        </DisplayFilter>  
    </Container>
  )
}

export default Main