import styles from './BackgroundImage.module.css';

export default function BackgroundImage({imageUrl, width, height, children}){
    return (
        <div style={{backgroundImage: "url(" + imageUrl +")", width: width, height: height, position: "relative"}} className={styles.image}>
            {children}
        </div>
    );
}