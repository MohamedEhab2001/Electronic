import React , {useState} from 'react'
import { colorsPalette } from '../constants'
import styled from 'styled-components'
import { ExpandCircleDown } from '@mui/icons-material'
import { Ct } from '../constants'
import { mobile , tablet , laptop } from '../responsive'
import { Link } from 'react-router-dom'

const Container = styled.div`
    background-color: ${colorsPalette["1"]};
`

const Wrapper = styled.div`
display:flex;
${mobile ({
    flexDirection:"column"
  })}
  
  ${tablet ({
    flexDirection:"column"
  })}
` 

const OnHoverAll = styled.div`
position:absolute;
top:${props => props.h};
left:0;
min-height:30vh;
max-height:90vh;
overflow:auto;
padding:5px;
width:700px;
background-color:white;
display:none;
z-index:2000;
${mobile ({
    flexDirection:"column",
    width:"100vw"
  })}
  
  ${tablet ({
    flexDirection:"column",
    width:"100vw"
  })}
`
const Menu = styled.div`
flex:1;
border-right: 1px solid rgb(226, 229, 241);
background-color:${colorsPalette['3']};
display:flex;
padding:10px;
flex-direction:column;
`

const MenueItem = styled.p`
color:black;
font-size:13px;
&:hover{
    color:${colorsPalette["4"]}
}

`

const MenuDetail = styled.div`
flex:2;
background-color:white;
display:flex;
` 

const All = styled.div`
flex:1;
display:flex;
justify-content:center;
align-items:center;
cursor:pointer;
position:relative;
&:hover ${OnHoverAll}{
    display:flex
}
border-right: 1px solid rgb(226, 229, 241);
`

const MainLink = styled.p`
font-size:15px;
font-weight:bold;
color: ${colorsPalette['4']};
`

const Cats = styled.div`
flex:8;
display:flex;
justify-content :start;
align-items:center;
${mobile ({
    justifyContent:"center",
    padding:"15px"
  })}
  
  ${tablet ({
    justifyContent:"center",
    padding:"15px"
  })}
`
const NothingYetInMenueDetail = styled.div`
margin:auto;
padding:10px;
`

const ShopBy = styled.div`
flex : 1;
padding:5px;
display:flex;
padding:10px;
flex-direction:column;
`
const Titleinmenuedetails = styled.h3`
`

const BestBrands = styled.div`
flex : 1;
padding:5px;
display:flex;
padding:10px;
flex-direction:column;
`

const Url = styled.div`
text-decoration:none;
color:${colorsPalette["4"]};
font-weight:600;
opacity : 1;
transition : all 0.4s ease-in-out;
position:relative;
transform-style: preserve-3d;
cursor:pointer;
margin : 0px 20px;
${mobile ({
    fontSize:"10px"
  })}
  
  ${tablet ({
    fontSize:"10px"
  })}
`
const Categoriesnav = () => {
    const [ObjectH , SetObjectH] = useState({})
    const [Show , SetShow] = useState(false)
    const handleHover = (obj) => {
        SetObjectH(obj)
        SetShow(true)
        } 
  return (
    <Container>
        <Wrapper>
            <All>
                <MainLink>ALL CATEGORIES</MainLink>
                <ExpandCircleDown sx={{"margin" : "0px 10px" , "fontSize" : "12px" , "color" : colorsPalette['4']}}/>
                <OnHoverAll h={"45px"} onMouseLeave={() => {SetShow(false)}}>
                        <Menu>
                                {Ct.map(elem => {
                                    return(
                                        <MenueItem onMouseEnter={() => {handleHover(elem)}}>{elem.title}</MenueItem>
                                    )
                                })}
                        </Menu>
                        <MenuDetail>
                                {Show ? 
                                <>
                                <ShopBy>
                                    <Titleinmenuedetails>Shop {ObjectH.title}</Titleinmenuedetails>
                                    <hr style={{"width" : "100%" , "border" : "1px solid rgb(226, 229, 241)" , "margin" : "5px auto"}}/>
                                    {ObjectH.subs.map(item => {
                                        return(
                                          <Link to="/nested" style={{color:'black' , textDecoration : 'none'}}>
                                                  <MenueItem>{item}</MenueItem>
                                            </Link>
                                    )})}
                                </ShopBy>
                                <BestBrands>
                                <Titleinmenuedetails>Best Brands</Titleinmenuedetails>
                                <hr style={{"width" : "100%" , "border" : "1px solid rgb(226, 229, 241)" , "margin" : "5px auto"}}/>
                                {ObjectH.brands.map(item => {
                                        return(
                                          <Link to="/nested" style={{color:'black' , textDecoration : 'none'}}>
                                                  <MenueItem>{item}</MenueItem>
                                            </Link>
                                    )})}
                                </BestBrands>
                                </>
                                : <NothingYetInMenueDetail>No thing here yet</NothingYetInMenueDetail>}
                        </MenuDetail>
                </OnHoverAll>
            </All>
            <Cats>
                    <Url> About </Url>
                    <Url> Contact </Url>
                    <Url> Deals </Url>
                    <Url> Rating </Url>
                    <Url>Latest </Url>
            </Cats>
        </Wrapper>
    </Container>
  )
}

export default Categoriesnav