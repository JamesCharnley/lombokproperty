import InfoSection from './InfoSection';
import styles from './LombokDestinations.module.css';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
    {
      url: '/selonglandscape.jpg',
      caption: 'First Slide'
    },
    {
      url: '/selonglandscapesunset.jpg',
      caption: 'Second Slide'
    },
    {
      url: '/selongcows.jpg',
      caption: 'Third Slide'
    },
    {
      url: '/selonglandscapesand.jpg',
      caption: 'Third Slide'
    },
    {
      url: '/selonglandscapemountains.jpg',
      caption: 'Third Slide'
    },
  ];

export default function LombokDestinations(){
    return (
        <div className={styles.container}>
            <InfoSection imageSide='right' imageUrl={"/selongportraitsunset.jpg"} title={"Selong"}>
            <p style={{fontSize: "20px", color: "#797b82"}}>Selong, is a tranquil and laid-back destination known for its stunning, busy beach that attracts both surfers and those seeking relaxation.<br/><br/>
            Unlike the more bustling areas of Lombok, Selong offers a serene escape with its long stretches of sand and excellent surf conditions, making it a popular spot for surf lessons and water activities.
            The beach's natural beauty and relaxed vibe provide a perfect contrast to the more developed tourist hubs.<br/><br/>
            For foreign investors, visiting Selong is crucial to understanding the unique appeal of this area and its potential for growth, particularly in tourism and hospitality sectors that cater to those looking for an authentic, peaceful beach experience.</p>
            </InfoSection>
            <div style={{width: "90%", marginLeft: "auto", marginRight: "auto"}} className="slide-container">
                <Fade>
                  {fadeImages.map((fadeImage, index) => (
                    <div key={index}>
                      <img style={{ width: '100%' }} src={fadeImage.url} alt='none'/>
                      <h2>{fadeImage.caption}</h2>
                    </div>
                  ))}
                </Fade>
            </div>

        </div>
    );
}