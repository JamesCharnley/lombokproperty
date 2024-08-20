
import { Link } from 'react-router-dom';
import HeaderImage from './HeaderImage';
import InfoSection from './InfoSection';
import styles from './Home.module.css';
import LinkButton from './LinkButton';
import { NavBar } from './NavBar';

export default function Home(){


    return (
        <div style={{width: "100vw"}}>
          <NavBar/>
          <HeaderImage></HeaderImage>
          <div style={{height: "100px"}}></div>
          <InfoSection imageSide={"right"} imageUrl={"meangbeach.jpg"} title={"welcome"}>
            <p style={{fontSize: "20px", color: "#797b82"}}>Welcome to Lombok Land Ventures, your trusted guide to investing in the stunning island of Lombok, Indonesia.<br/><br/>
             Whether you're a first-time investor or looking to expand your portfolio, we are here to help 
             you navigate the process of buying land in this tropical paradise.<br/><br/> With our expertise and local insights, 
             we'll ensure you make informed decisions, unlocking the potential of Lombok's booming real estate market.<br/><br/> 
             Start your journey towards owning a piece of paradise today with Lombok Land Ventures.</p>
            </InfoSection>
          <InfoSection imageSide={"left"} imageUrl={"meangland.jpg"} title={"WE OFFER"}>
            <p style={{fontSize: "20px", color: "#797b82"}}>Welcome to Lombok Land Ventures, your ultimate resource for purchasing land in the beautiful island of Lombok, Indonesia.<br/><br/>
            We provide comprehensive information tailored for foreign investors, guiding you through every step of the process. From understanding <Link className={styles.link} to="/information/lombok-legal-requirements">legal requirements</Link> and navigating <Link className={styles.link} to="/information/lombok-local-regulations">local regulations</Link> to discovering the best locations and investment opportunities, we offer expert advice and detailed guides to make your land-buying journey seamless and secure.<br/><br/>
            With Lombok Land Ventures, you can confidently invest in one of Indonesia's most promising destinations, supported by reliable information and dedicated assistance.</p>
            <div style={{display: "flex", justifyContent: "center"}}><LinkButton text={"Read More"} link={"/information"} /></div> 
            </InfoSection>
            <InfoSection imageSide={"right"} imageUrl={"meangland.jpg"} title={"Legal Services"}>
            <p style={{fontSize: "20px", color: "#797b82"}}>Foreigners looking to buy land in Indonesia face several challenges, including the need to establish a local company, navigate complex legal regulations, and overcome language barriers.<br/><br/>
            At Lombok Land Ventures, we connect you with trusted partners that provide the essential legal services and expertise required to meet these demands. Our partners will guide you through every step of the process, from company formation and compliance with local laws to obtaining the necessary permits.<br/><br/>
            With our comprehensive support, you can confidently invest in Lombok's thriving real estate market and turn your dream of owning land in paradise into reality.</p>
            <div style={{display: "flex", justifyContent: "center"}}><LinkButton text={"Read More"} link={"/legal-services"} /></div> 
            </InfoSection>
            <InfoSection imageSide={"left"} imageUrl={"meangland.jpg"} title={"Travel Guide"}>
            <p style={{fontSize: "20px", color: "#797b82"}}>At Lombok Land Ventures, we provide foreign investors with the essential information needed to explore key areas across Lombok, allowing you to gain a comprehensive understanding of the island's future development potential.<br/><br/>
            By guiding you to visit strategic <Link className={styles.link} to="/lombok-tourist-destinations">locations</Link>, from emerging tourist hotspots to untouched regions poised for growth, we help you envision how these areas will evolve as tourism flourishes.<br/><br/>
            Our insights enable you to make informed decisions, ensuring your investment aligns with the dynamic opportunities Lombok has to offer as it becomes an increasingly popular destination.</p>
            <div style={{display: "flex", justifyContent: "center"}}><LinkButton text={"Read More"} link={"/lombok-tourist-destinations"} /></div> 
            </InfoSection>
            {/*<Enquire></Enquire>*/}
          
        </div>
      );
}