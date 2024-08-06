
import './App.css';
import AboutSection from './components/AboutSection';
import Enquire from './components/Enquire';
import HeaderImage from './components/HeaderImage';
import InfoSection from './components/InfoSection';

function App() {
  return (
    <div style={{width: "100vw"}}>
      <HeaderImage></HeaderImage>
      <div style={{height: "100px"}}></div>
      <InfoSection imageSide={"right"} imageUrl={"meangbeach.jpg"} title={"welcome"}>
        <p style={{fontSize: "20px", color: "#797b82"}}>Welcome to Lombok Land Ventures, your trusted guide to investing in the stunning island of Lombok, Indonesia.<br/><br/>
         Whether you're a first-time investor or looking to expand your portfolio, our dedicated team is here to help 
         you navigate the process of buying land in this tropical paradise.<br/><br/> With our expertise and local insights, 
         we'll ensure you make informed decisions, unlocking the potential of Lombok's booming real estate market.<br/><br/> 
         Start your journey towards owning a piece of paradise today with Lombok Land Ventures.</p>
        </InfoSection>
      <InfoSection imageSide={"left"} imageUrl={"meangland.jpg"} title={"WE OFFER"}>
        <p style={{fontSize: "20px", color: "#797b82"}}>At Lombok Land Ventures, we specialize in connecting investors directly with local land brokers, allowing you to bypass the big companies that often sell land at inflated prices.<br/><br/>
        Our network of trusted local brokers ensures that you get the best deals on the market, providing you with exclusive opportunities that might otherwise be out of reach.<br/><br/> With our expertise and local insights, 
         we'll ensure you make informed decisions, unlocking the potential of Lombok's booming real estate market.<br/><br/> 
         By working with us, you can secure prime land at competitive prices, maximizing your investment potential and supporting the local community.</p>
        </InfoSection>
        <InfoSection imageSide={"right"} imageUrl={"meangland.jpg"} title={"Legal Services"}>
        <p style={{fontSize: "20px", color: "#797b82"}}>Foreigners looking to buy land in Indonesia face several challenges, including the need to establish a local company, navigate complex legal regulations, and overcome language barriers.<br/><br/>
        At Lombok Land Ventures, we connect you with trusted partners that provide the essential legal services and expertise required to meet these demands. Our network of professionals will guide you through every step of the process, from company formation and compliance with local laws to obtaining the necessary permits.<br/><br/>
        With our comprehensive support, you can confidently invest in Lombok's thriving real estate market and turn your dream of owning land in paradise into reality.</p>
        </InfoSection>

      <Enquire></Enquire>

      <AboutSection/>

      
    </div>
  );
}

export default App;
