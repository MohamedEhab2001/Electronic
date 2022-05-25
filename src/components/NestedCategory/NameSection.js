import React from 'react'
import styled from 'styled-components';
import { DealsProduct, SiteMargin } from '../../constants'
import { mobile , tablet , laptop } from '../../responsive'

const Container = styled.div`
width:${SiteMargin}%;
margin:10px auto;
${mobile ({
  margin : "20px auto"
})}

${tablet ({
  margin : "20px auto"
})}
`
const AboveAnnoucment = styled.div`
width:100%;
height:90px;
background: linear-gradient(
    rgba(0, 51, 102, 0.1),
    rgba(0, 51, 102, 0.1)
  ), url(${props => props.url}) 
  center;
  ${tablet ({
    height:"70px",
    backgroundSize : "100% 100%"
  })}
${mobile ({
  height:"30px",
  backgroundSize : "100% 100%"
})}

`

const Annoucment = styled.div`
width:100%;
height:300px;
background: linear-gradient(
    rgba(0, 51, 102, 0.1),
    rgba(0, 51, 102, 0.1)
  ), url(${props => props.url}) 
  center;
${tablet ({
  height:"200px",
  backgroundSize : "100% 100%"
})}
${mobile ({
  height:"80px",
  backgroundSize : "100% 100%"
})}
`
const NameSection = () => {
  return (
    <Container>
        <AboveAnnoucment url="https://k.nooncdn.com/cms/pages/20220215/1680fd1dca201090d4b93ea496d4a792/en_dk_eg-toggle-01.png"/>
        <Annoucment url="https://k.nooncdn.com/cms/pages/20220207/0dbba3adb9e696d49fac739325539ca2/en_banner-01.png"/>
    </Container>
  )
}

export default NameSection