import { PersonOutline , PersonAddAlt , Language } from '@mui/icons-material'
import React from 'react'
import { colorsPalette } from '../constants'
import styled from 'styled-components'
import { mobile , tablet , laptop } from '../responsive'
import { Link } from 'react-router-dom'

const Logo = styled.h3`
font-weight: bold;
color:white;
`

const Container = styled.div`
    background-color: ${colorsPalette["4"]};
`
const Wrapper = styled.div`
    padding : 10px 20px;
    display : flex;
    ${mobile ({
        flexDirection:"column"
      })}
      
      ${tablet ({
        flexDirection:"column"
      })}
`
const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
display:flex;
align-items: center;
${mobile ({
    fontSize:"10px"
  })}
  
  ${tablet ({
    fontSize:"10px"
  })}
  ${laptop({
    fontSize:"11px"
  })}
`;

const SearchContainer = styled.div`
border: 0.5px solid white;
border-radius:5px;
display: flex;
align-items: center;
margin-left: 25px;
background-color:white;
width:100%;
`;

const Input = styled.input`
  border: none;
  outline : none;
  width:100%;
  padding : 10px;
`;

const Left   = styled.div`
flex:1;  align-items: center; display:flex;
${mobile ({
    justifyContent:"center"
  })}
  
  ${tablet ({
    justifyContent:"center"
  })}
`
const Center = styled.div`
flex:6; align-items: center; display:flex;

`
const Right  = styled.div`
flex:2; display : flex; justify-content: flex-end;align-items: center;
${mobile ({
    justifyContent:"center",
    padding:"10px"
  })}
  
  ${tablet ({
    justifyContent:"center",
    padding:"10px"
  })}
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                  <Link to="/" style={{color:'white' , textDecoration : 'none'}}>
                  <Logo>ECOMMERCE.</Logo>
                  </Link>
                </Left>
                <Center>
                    <SearchContainer>
                        <Input placeholder='search ...'/>
                    </SearchContainer>
                </Center>
                <Right>
                <MenuItem>
                <Link to="/register" style={{color:'white' , textDecoration : 'none'}}>REGISTER</Link>
                <PersonAddAlt sx={{"color" : "white" , "marginRight" : "10px","marginLeft" : "10px"}}/>
                </MenuItem>
                <MenuItem>
                <Link to="/login" style={{color:'white' , textDecoration : 'none'}}>LOGIN</Link>
                <PersonOutline sx={{"color" : "white" , "marginRight" : "10px","marginLeft" : "10px"}}/>
                </MenuItem>
                <MenuItem>
                <a  style={{color:'white' , textDecoration : 'none'}}>Arabic</a>
                <Language sx={{"color" : "white" , "marginRight" : "10px","marginLeft" : "10px"}}/>
                </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
