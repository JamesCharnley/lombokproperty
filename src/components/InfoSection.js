import BackgroundImage from './BackgroundImage';
import styles from './InfoSection.module.css';

export default function InfoSection({imageSide = "left", imageUrl, title, children}){
    if(imageSide === 'left'){
        return (
        <div className={styles.container}>
            <BackgroundImage imageUrl={imageUrl} width={"45%"} height={"500px"}/>
            <div className={styles.text_section}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.paragraph}>{children}</p>
            </div>
        </div>
        );
    }
    return (
        <div className={styles.container}>
            <div className={styles.text_section}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.paragraph}>{children}</p>
            </div>
            <BackgroundImage imageUrl={imageUrl} width={"45%"} height={"500px"}/>
        </div>
    );
}