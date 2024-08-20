import styles from './LegalServices.module.css';
import InfoSection from './InfoSection';
import { Link } from 'react-router-dom';
import { NavBar } from './NavBar';

export default function LegalServices(){
  return (
    <div className={styles.container}>
      <NavBar/>
      <InfoSection
          imageUrl={"/selonglandscape.jpg"}
          imageSide="right"
          title={"Legal Services"}
        >
          <p style={{ fontSize: "20px", color: "#797b82" }}>
          Navigating the <Link className={styles.link} to="/information/lombok-legal-requirements">legal requirements</Link> for buying land in Lombok, Indonesia, can be complex, especially for foreign investors.
            <br />
            <br />
            Ensuring that all legal aspects are properly handled is crucial for a smooth and secure investment. At Lombok Land Ventures, we connect you with trusted legal partners who specialize in guiding foreigners through the process.<br/><br/>
            From setting up a local company (PT PMA) to meeting all regulatory obligations, our partners make it easy to overcome legal challenges, allowing you to focus on your investment with confidence.
            <br />
            <br />
            With the right legal support, owning land in Lombok becomes a seamless and worry-free experience.
          </p>
        </InfoSection>
    </div>
  );
}