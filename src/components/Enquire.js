import styles from './Enquire.module.css';
import InfoForm from './InfoForm';
import InfoSection from './InfoSection';

export default function Enquire(){
    return(
        <div className={styles.container}>
            <div className={styles.button_container}>
                <button className={styles.enquire_button}>enquire</button>
            </div>
            
            <div className={styles.flex_container}>
                <InfoSection imageSide={"right"} imageUrl={"bluemonkeypalms.jpg"} title={"Get Started Now"}><InfoForm/></InfoSection>
            </div>
        </div>
    );
}