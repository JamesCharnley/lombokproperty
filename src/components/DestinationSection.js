import InfoSection from './InfoSection';
import styles from './DestinationSection.module.css';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

export default function DestinationSection({image, slideImages, description, title}){
    return (
        <div className={styles.container}>
            <InfoSection imageSide='right' imageUrl={image} title={title}>
            {description}
            </InfoSection>
            <div style={{width: "90%", marginLeft: "auto", marginRight: "auto"}} className="slide-container">
                <Fade>
                  {slideImages.map((slideImages, index) => (
                    <div key={index}>
                      <img style={{ width: '100%', height: "600px" }} src={slideImages.url} alt='none'/>
                      <h2>{slideImages.caption}</h2>
                    </div>
                  ))}
                </Fade>
            </div>

        </div>
    );
}