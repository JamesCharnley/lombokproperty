import { useState } from "react";
import styles from './SingleSelectCheckbox.module.css';

export default function SingleSelectCheckbox({options, updateSelected}){

    const interestOptions = options;
    const [selectedInterestOption, setSelectedInterestOption] = useState(null);

    function onInterestSelectionChange(i){
        if(updateSelected){
            i === selectedInterestOption ? updateSelected(null) : updateSelected(i);
        }
        setSelectedInterestOption((cur) => cur === i ? null : i);
    }
    return (
        <div className={styles.container}>
            <label className={styles.form_label}>What describes your current goal best</label>
            {interestOptions.map((option, i) => 
            <div className={styles.option} key={i}>
                <input className={styles.checkbox} type='checkbox' name={`interest_type_${i}`} checked={i === selectedInterestOption} onChange={() => onInterestSelectionChange(i)}></input>
                <label className={styles.option_text}>{option}</label>
            </div>
            )}
                    
        </div>
    );
}