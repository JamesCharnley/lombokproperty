import styles from './Enquire.module.css';
import InfoForm from './InfoForm';
import InfoSection from './InfoSection';
import {
    GoogleReCaptchaProvider
  } from 'react-google-recaptcha-v3';
export default function Enquire(){
    return(
        <div className={styles.container}>
            <div className={styles.flex_container}>
                <InfoSection imageSide={"right"} imageUrl={"bluemonkeypalms.jpg"} title={"Get Started Now"}>
                <GoogleReCaptchaProvider reCaptchaKey="6LewrCQqAAAAABALtRifcblqZdKwuHpTJANZlLl6">
                    <InfoForm/>
                </GoogleReCaptchaProvider>
                    
                </InfoSection>
            </div>
        </div>
    );
}