import React , {useState} from 'react';
import styled from 'styled-components';
import { SiteMargin } from '../constants';
import ProuductsSlider from "../components/HomeC/ProuductsSlider/ProuductsSlider"
import Promotions from "../components/HomeC/Promotion/Promotions"
import ShopBy from '../components/HomeC/ShopBy/ShopBy';
import Brands from '../components/HomeC/Brands/Brands';
import CategoryOffer from '../components/HomeC/CategoryOffer/CategoryOffer';
import Footer from '../components/Footer';
import { DealsProduct , NoDealsProduct} from '../constants';
import Navbar from '../components/Navbar';
import Categoriesnav from '../components/Categoriesnav';
import SliderSection from "../components/HomeC/Slider/SliderSection"
import Charctaristics from '../components/HomeC/Charctaristics/Charctaristics';
import CategoryGrid from '../components/HomeC/CategoryGrid/CategoryGrid';
import { mobile , tablet , laptop } from '../responsive'

const Container = styled.div`
`

// 23.1.7779620
const Wraper = styled.div`
height: 100vh;
`
const ImageDiv = styled.a`
height:60px;
margin:15px 10px;
background-image:url(${props => props.url});
background-size : 100% 100%;
display:none;
width:${SiteMargin}%;
${mobile ({
  display:"block"
})}

${tablet ({
  display:"block",
  height:"90px"
})}
`

const Home = () => {
  return <Container>
  <Wraper>
        <Navbar />
        <Categoriesnav />
        <Charctaristics />
        <ImageDiv url="https://www.rayashop.com/media/amasty/bannerslider/WhatsApp_Image_2022-02-25_at_5.45.31_PM_3_.jpeg"/>
        <SliderSection />
        <CategoryGrid />
        <ProuductsSlider keyword="dealsforyou" lst={DealsProduct}/>
        <Promotions />
        <ProuductsSlider keyword="latest" lst={NoDealsProduct}/>
        <ImageDiv url="https://www.rayashop.com/media/amasty/bannerslider/Raya_New-12.jpg"/>
        <ProuductsSlider keyword="foryou" lst={NoDealsProduct}/>
        <CategoryOffer />
        <ProuductsSlider keyword="latest" lst={NoDealsProduct}/>
        <ProuductsSlider keyword="latest" lst={NoDealsProduct}/>
        <ShopBy />
        <ImageDiv url="https://eg.jumia.is/cms/7-22/JumiaExpress/Main/Jumia_Express_-1152x252_-EN.jpg"/>
        <ProuductsSlider keyword="latest" lst={NoDealsProduct}/>
        <Brands />
        <Footer />
  </Wraper>
  </Container>;
};

export default Home;
