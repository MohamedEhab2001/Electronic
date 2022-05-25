import { Add, Remove , Delete } from '@mui/icons-material';
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Categoriesnav from '../components/Categoriesnav';
import { colorsPalette , NoDealsProduct, SiteMargin} from '../constants';
import { mobile , tablet } from '../responsive';
import ProuductsSlider from "../components/HomeC/ProuductsSlider/ProuductsSlider"
const Container = styled.div`

`;

const Wrapper = styled.div`
  width:${SiteMargin}%;
  margin:auto;
`;


const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  ${mobile ({
    flexDirection : "column",
    gap:"10px"
  })}
  
  ${tablet ({
    flexDirection : "column",
    gap:"10px"
  })}
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? colorsPalette['4'] : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile ({
    flexDirection : "column"
  })}
  
  ${tablet ({
    flexDirection : "column"
  })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;

`;
const ImageContainer = styled.div`
display:flex;
flex-direction:column;
justify-content: space-around;
align-items:center

`
const Image = styled.img`
  width: 120px;
  ${mobile ({
    width : "100px",
  })}
  
  ${tablet ({
    width : "100px",
  })}
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap:5px;
  ${mobile ({
    fontSize : "13px"
  })}
  
  ${tablet ({
    fontSize : "13px"
  })}
`;

const ProductCat = styled.span`
font-size:12px;
color:${colorsPalette['5']};
`;
const ProductName = styled.span``;

const ProductDelete = styled.div`
display:flex;
justify-content:start;
align-items:center;
cursor:pointer;
font-size:15px;
&:hover{
  color : ${colorsPalette['4']}
}
`;


const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  ${mobile ({
    fontSize : "20px"
  })}
  
  ${tablet ({
    fontSize : "20px"
  })}
`;

const ProductAmount = styled.p`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile ({
    fontSize : "20px"
  })}
  
  ${tablet ({
    fontSize : "20px"
  })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 10px;
  height: fit-content;
  position : sticky;
  top : 15px; 
  ${mobile ({
    position : "unset",
  })}
  
  ${tablet ({
    position : "unset",
  })}
  `;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: ${colorsPalette['4']};
  color: white;
  font-weight: 600;
`;

const Cart = () => {

  const ProductInCart = () => {
    return(
      <Product>
      <ProductDetail>
        <ImageContainer>
        <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
        </ImageContainer>
        <Details>
          <ProductCat>
            Shoes
          </ProductCat>
          <ProductName>
            <b>Product:</b> JESSIE THUNDER SHOES
          </ProductName>
          <ProductDelete>
            <Delete sx={{"fontSize" : "15px"}}/>
            Remove
          </ProductDelete>
        </Details>
      </ProductDetail>
      <PriceDetail>
      <ProductPrice>450 EGP</ProductPrice>
        <ProductAmountContainer>
          <Add />
          <ProductAmount>2</ProductAmount>
          <Remove />
        </ProductAmountContainer>
      </PriceDetail>
    </Product>
    );
  }

  return (
    <Container>
      <Navbar />
      <Categoriesnav />
      <Wrapper>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {ProductInCart()}
            <Hr />
            {ProductInCart()}
            <Hr />
            {ProductInCart()}
            <Hr />
            {ProductInCart()}
            <Hr />
            {ProductInCart()}
            <Hr />
            {ProductInCart()}
            <Hr />
            {ProductInCart()}
            <Hr />
            {ProductInCart()}
            <Hr />
            {ProductInCart()}
            <Hr />
            {ProductInCart()}
            <Hr />
            {ProductInCart()}
            <Hr />
            {ProductInCart()}
            <Hr />
            {ProductInCart()}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <ProuductsSlider keyword="You also might like" lst={NoDealsProduct} hideView/>
      <ProuductsSlider keyword="Top selling items" lst={NoDealsProduct} hideView/>

      <Footer />
    </Container>
  );
};

export default Cart;