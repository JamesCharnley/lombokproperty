import { useParams } from 'react-router';
import styles from './InformationPage.module.css';
import LegalRequirements from './LegalRequirements';
import LocalRegulations from './LocalRegulations';
import { useEffect, useRef } from 'react';
import { NavBar } from './NavBar';

export default function InformationPage(){

    let {section} = useParams();
    const regulationRef = useRef();
    const legalRef = useRef();
    useEffect(function (){
        if(section){
            if(section === "building-regulations"){
                regulationRef.current?.scrollIntoView();
            }else if(section === "lombok-legal-requirements"){
                legalRef.current?.scrollIntoView();
            }
        }
        else{
            console.log("section undefined");
        }
    }, [section])
    return (
        <div className={styles.container}>
            <NavBar/>
            <div ref={legalRef}>
                <LegalRequirements id="legal"/>
            </div>
            
            <div style={{height: "200px"}}></div>
            <div ref={regulationRef}>
                <LocalRegulations/>
            </div>
            
        </div>
    );
}