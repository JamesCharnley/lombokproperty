import BackgroundImage from './BackgroundImage';
import styles from './HeaderImage.module.css';

export default function HeaderImage(){
    return (
        <BackgroundImage imageUrl={"meangbeach.jpg"} width={"100vw"} height={"100vh"}>
            <h2 className={styles.title}>Lombok Land Ventures</h2>
      </BackgroundImage>
    );
}