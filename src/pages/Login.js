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
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: ${colorsPalette['4']};
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;
const Logo = styled.h1`
font-weight: bold;
color:black;
margin : 12px auto;
`
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
            <Logo>ECOMMERCE.</Logo>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
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

export default Login;