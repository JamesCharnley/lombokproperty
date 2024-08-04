
import './App.css';
import HeaderImage from './components/HeaderImage';
import InfoForm from './components/InfoForm';
import InfoSection from './components/InfoSection';

function App() {
  return (
    <div style={{width: "100vw"}}>
      <HeaderImage></HeaderImage>
      <div style={{height: "100px"}}></div>
      <InfoSection imageSide={"right"} imageUrl={"bluemonkeypalms.jpg"} title={"WELCOME"}>
        Welcome to Lombok Land Ventures, your trusted guide to investing in the stunning island of Lombok, Indonesia.<br/><br/>
         Whether you're a first-time investor or looking to expand your portfolio, our dedicated team is here to help 
         you navigate the process of buying land in this tropical paradise.<br/><br/> With our expertise and local insights, 
         we'll ensure you make informed decisions, unlocking the potential of Lombok's booming real estate market.<br/><br/> 
         Start your journey towards owning a piece of paradise today with Lombok Land Ventures.
        </InfoSection>
      <div style={{height: "100px"}}></div>
      <InfoSection imageSide={"left"} imageUrl={"meangland.jpg"} title={"WE OFFER"}>
        At Lombok Land Ventures, we specialize in connecting investors directly with local land brokers, allowing you to bypass the big companies that often sell land at inflated prices.<br/><br/>
        Our network of trusted local brokers ensures that you get the best deals on the market, providing you with exclusive opportunities that might otherwise be out of reach.<br/><br/> With our expertise and local insights, 
         we'll ensure you make informed decisions, unlocking the potential of Lombok's booming real estate market.<br/><br/> 
         By working with us, you can secure prime land at competitive prices, maximizing your investment potential and supporting the local community.
        </InfoSection>



      <div style={{width: "40%", marginLeft: "auto", marginRight: "auto"}}>
      <InfoForm />
      </div>
    </div>
  );
}

export default App;
