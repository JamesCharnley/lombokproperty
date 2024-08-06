import styles from './AboutSection.module.css';

export default function AboutSection(){
    return(
        <div className={styles.container}>
            <div className={styles.image_container}>
                <img className={styles.image} src='profilepicture.jpg' alt='profilepicture'/>
            </div>
            <div className={styles.text_container}>
                <h3 className={styles.title}>James Charnley</h3>
                <p className={styles.paragraph}>James Charnley, the founder of Lombok Land Ventures, was inspired to establish the company after his own family successfully invested in Lombok by purchasing land. Recognizing the potential of this beautiful island and the challenges foreign investors face, James launched Lombok Land Ventures to help others navigate the complexities of land acquisition in Lombok.<br/><br/>
                His personal experience and commitment to providing expert guidance ensure that investors can confidently embark on their own journeys to owning a piece of this tropical paradise.</p>
            </div>
        </div>
    );
}