import React from 'react';
import styled from 'styled-components';
import { colorsPalette } from '../../constants';
import i18n from "../../i18n"
import { useTranslation } from "react-i18next"
import DialogSelect from './Dialoug';


const Container = styled.div`
height:100vh;
width:100%;
`
const Wrapper = styled.div`
display:flex;
flex-direction:column;
align-items:center;
background-color: white;
height:100%;
`

const Name = styled.p`
font-weight:bold;
margin:auto;
display:none;
transition : all .5s ease-in-out;
`

const Icon = styled.p`
color : ${colorsPalette["4"]};
margin:auto;
position:relative;
font-size:1.5em;
`

const Holder = styled.div`
display:flex;
cursor:pointer;
width:100%;
height:60px;
margin-top:8px;
transition : all .5s ease-in-out;
&:hover {
background-color:${colorsPalette["5"]};
}
&:hover ${Icon} {
    display:none;
}
&:hover ${Name} {
    display:block;
    color:${colorsPalette["4"]};
}
`

const Menue = () => {
  const { t } = useTranslation()
  return <Container>
      <Wrapper>
        <Holder>
            <Icon className="bi bi bi-cart-fill">
            </Icon>
            <Name>
                {t("cart")}
            </Name>
        </Holder>
        <Holder>
            <Icon className="bi bi-chat-square-heart-fill">
            </Icon>
            <Name>
                {t("favs")}
            </Name>
        </Holder>
        <Holder>
            <Icon className="bi bi-door-open-fill">
            </Icon>
            <Name>
                {t("login")}
            </Name>
        </Holder>
        <Holder>
            <Icon className="bi bi-person-plus-fill">
            </Icon>
            <Name>
                {t("signup")}
            </Name>
        </Holder>
        <DialogSelect />

      </Wrapper>
  </Container>;
};

export default Menue;
