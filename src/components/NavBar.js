import BackgroundImage from './BackgroundImage';
import navStyles from './NavBar.module.css';
import { Link } from 'react-router-dom';
export function NavBar(){
  return (
    <div className={navStyles.sticky_navbar}>
        <div style={{padding: "5px", display: "flex", justifyContent: "center"}}>
            <BackgroundImage width={"60px"} height={"60px"} imageUrl={"/android-chrome-512x512.png"}/>
        </div>
      <div className={navStyles.tabs}>
      <Link className={navStyles.nav_content} to="/">Home</Link>
      <Link className={navStyles.nav_content} to="/information/lombok-legal-requirements">Legal Info</Link>
      <Link className={navStyles.nav_content} to="/legal-services">Legal Services</Link>
      <Link className={navStyles.nav_content} to="/lombok-tourist-destinations">Travel</Link>
      
      </div>
    </div>
  );
}