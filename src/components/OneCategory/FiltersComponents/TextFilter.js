import { Search } from '@mui/icons-material';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import React from 'react'
import { Container , Wrapper , Head , HeadButton , HeadTitle , Title , Button, SearchContainer, InputIcon} from './MainStyledComponent';

const TextFilter = (props) => {
  return (
    <Container>
            <Head>
                <HeadTitle>
                    <Title>
                        {props.title}
                    </Title>
                </HeadTitle>
                <HeadButton>
                        <Button>
                            RESET
                        </Button>
                </HeadButton>
            </Head>
            <SearchContainer>
                <Search style={{color:'black' , fontSize:'15px'}}/>
                <InputIcon placeholder='search'/>
            </SearchContainer>
        <Wrapper>
            <FormGroup>
                <FormControlLabel  control={<Checkbox inputProps={{"data-key" : "type"}} />} label="Samsung" name="Samsung" />
                <FormControlLabel  control={<Checkbox inputProps={{"data-key" : "type"}} />} label="Lenovo"  name="Lenovo" />
                <FormControlLabel control={<Checkbox inputProps={{"data-key" : "type"}}  />} label="Asus"  name="Asus" />
                <FormControlLabel  control={<Checkbox inputProps={{"data-key" : "type"}} />} label="Samsung" name="Samsung" />
                <FormControlLabel  control={<Checkbox inputProps={{"data-key" : "type"}} />} label="Lenovo"  name="Lenovo" />
                <FormControlLabel control={<Checkbox inputProps={{"data-key" : "type"}}  />} label="Asus"  name="Asus" />
                <FormControlLabel  control={<Checkbox inputProps={{"data-key" : "type"}} />} label="Samsung" name="Samsung" />
                <FormControlLabel  control={<Checkbox inputProps={{"data-key" : "type"}} />} label="Lenovo"  name="Lenovo" />
                <FormControlLabel control={<Checkbox inputProps={{"data-key" : "type"}}  />} label="Asus"  name="Asus" />
                <FormControlLabel  control={<Checkbox inputProps={{"data-key" : "type"}} />} label="Samsung" name="Samsung" />
                <FormControlLabel  control={<Checkbox inputProps={{"data-key" : "type"}} />} label="Lenovo"  name="Lenovo" />
                <FormControlLabel control={<Checkbox inputProps={{"data-key" : "type"}}  />} label="Asus"  name="Asus" />
                <FormControlLabel  control={<Checkbox inputProps={{"data-key" : "type"}} />} label="Samsung" name="Samsung" />
                <FormControlLabel  control={<Checkbox inputProps={{"data-key" : "type"}} />} label="Lenovo"  name="Lenovo" />
                <FormControlLabel control={<Checkbox inputProps={{"data-key" : "type"}}  />} label="Asus"  name="Asus" />
        </FormGroup>
        </Wrapper>
        <hr style={{"width" : "100%" , "margin" : "10px auto"}} />
    </Container>
  )
}

export default TextFilter