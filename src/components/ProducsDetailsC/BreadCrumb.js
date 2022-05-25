import React from 'react'
import styled from 'styled-components';
import { colorsPalette } from '../../constants';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

const Container = styled.div`

`

const Wrapper = styled.div`
padding : 10px;

`
const BreadCrumb = () => {
  return (
    <Container>
        <Wrapper>
          <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                  Home
                </Link>
                <Link
                  underline="hover"
                  color="inherit"
                  href="/getting-started/installation/"
                >
                  Laptopbs
                </Link>
                <Typography color="text.primary">Asus</Typography>
            </Breadcrumbs>
        </Wrapper>
    </Container>
  )
}

export default BreadCrumb