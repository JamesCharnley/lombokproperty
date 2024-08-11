import DestinationSection from './DestinationSection';
import styles from './LombokDestinations.module.css';
import 'react-slideshow-image/dist/styles.css'

const fadeImagesSelong = [
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

  const fadeImagesTorok = [
    {
      url: '/torok1.jpg',
      caption: 'First Slide'
    },
    {
      url: '/torok2.jpg',
      caption: 'Second Slide'
    },
    {
      url: '/torok3.jpg',
      caption: 'Third Slide'
    },
    {
      url: '/torok4.jpg',
      caption: 'Third Slide'
    },
  ];

  const selongDescription = <p style={{fontSize: "20px", color: "#797b82"}}>Selong, is a tranquil and laid-back destination known for its stunning, busy beach that attracts both surfers and those seeking relaxation.<br/><br/>
            Unlike the more bustling areas of Lombok, Selong offers a serene escape with its long stretches of sand and excellent surf conditions, making it a popular spot for surf lessons and water activities.
            The beach's natural beauty and relaxed vibe provide a perfect contrast to the more developed tourist hubs.<br/><br/>
            For foreign investors, visiting Selong is crucial to understanding the unique appeal of this area and its potential for growth, particularly in tourism and hospitality sectors that cater to those looking for an authentic, peaceful beach experience.</p>
  const torokDescription = <p style={{fontSize: "20px", color: "#797b82"}}>Torok, Lombok, is a newly emerging tourist destination that offers a unique and secluded experience. Development in Torok has only just begun, with just two resorts currently in the area, surrounded by local farms and traditional villages.<br/><br/>
            As you approach the resorts, it feels like you're venturing into the middle of nowhere, with the untouched countryside all around you. The quiet, beautiful beach adds to the sense of tranquility, making it a perfect spot for those seeking an off-the-beaten-path experience.<br/><br/>
            For foreign investors, visiting Torok is essential to witnessing firsthand the area's untapped potential. With its serene environment and the early stages of development, Torok offers a rare opportunity to invest in a location that is set to grow while still retaining its natural charm.</p>;

export default function LombokDestinations(){
    return (
        <div className={styles.container}>
            <DestinationSection image={"/selongportrait.jpg"} title={"Selong"} slideImages={fadeImagesSelong} description={selongDescription}/>
            <DestinationSection image={"/torok2.jpg"} title={"Torok"} slideImages={fadeImagesTorok} description={torokDescription}/>

        </div>
    );
}