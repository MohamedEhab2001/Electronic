import styled from "styled-components";
import { colorsPalette } from "../constants";
import Wave from 'react-wavify'
import { mobile , tablet , laptop } from '../responsive'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
`;
const Logo = styled.h1`
font-weight: bold;
color:black;
margin : 12px auto;
`
const Wrapper = styled.div`
  width: 50%;
  padding: 20px;
  background-color: white;
  ${mobile ({
    width:"95%"
  })}
  
  ${tablet ({
    width:"90%",
  })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: ${colorsPalette['4']};
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
            <Logo>ECOMMERCE.</Logo>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
        <Wave fill="url(#gradient)">
          <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="10%"  stopColor={colorsPalette['4']} />
            <stop offset="90%" stopColor={colorsPalette['5']} />
          </linearGradient>
        </defs>
        </Wave>
      </Wrapper>
    </Container>
  );
};

export default Register;