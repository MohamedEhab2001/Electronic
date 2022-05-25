import styled from 'styled-components';
import { mobile , tablet,laptop } from '../../../responsive';
import { colorsPalette } from '../../../constants';

const Container = styled.div`
height:fit-content;
background-color: ${colorsPalette['4']};
border-radius:10px;
padding:5px;
flex : 1 ;
margin : 0px 10px;
${mobile ({
    width:"40%",
    flex:"unset",
    margin : "10px auto",
  })}
  
  ${tablet ({
    width:"40%",
    flex:"unset",
    margin : "10px auto",
  })}
&:hover {
    transform : scale(1.01)
}
`

const MoveProm = styled.a`
width:100%;
height:100%;
color:white;
text-decoration:none;
`

const DivInAnchor = styled.div`
display:flex;
${mobile ({
    flexDirection:"column"
  })}
  
  ${tablet ({
    flexDirection:"column"
  })}
`
const TitleDiv = styled.div`
flex:1;
display:flex;
`
const ImgDiv = styled.div`
flex:1;
display:flex;
`
const TitleContainer = styled.div`
margin:auto;
text-align:center;
height:fit-content;
${mobile ({
    height:"50%"
  })}
  
  ${tablet ({
    height:"50%"
  })}
`
const Ttile = styled.p`
font-size:1.1em;
font-weight:800;
`

const Description = styled.p`
font-size:0.9em;
font-weight:400;
line-height: 0;
${mobile ({
    lineHeight:"1",
    height:"50px"
  })}
  
  ${tablet ({
    lineHeight:"1",
    height:"50px"

  })}
`

const ImageChildDiv = styled.div`
background-color:white;
border-radius:10px;
width:120px;
height:120px;
margin:auto;
display:flex;
`

const Image = styled.img`
margin:auto;
width:70%;
`


const Proms = ({item}) => {
    return(
            <Container>
                <MoveProm href='#'>
                    <DivInAnchor>
                        <TitleDiv>
                            <TitleContainer>
                                <Ttile>
                                    {item.title}
                                </Ttile>
                                <Description>
                                    {item.dis}
                                </Description>
                            </TitleContainer>
                        </TitleDiv>
                        <ImgDiv>
                            <ImageChildDiv>
                                <Image src={item.img}/>
                            </ImageChildDiv>
                        </ImgDiv>
                    </DivInAnchor>
                </MoveProm>
            </Container>
    ); 
}
export default Proms