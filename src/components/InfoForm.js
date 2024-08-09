import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import styles from './Form.module.css';
import SingleSelectCheckbox from './SingleSelectCheckbox';

function InfoForm(){
    const form = useRef();

    function sendEmail(e){
        e.preventDefault();
        
    emailjs
      .sendForm('service_07zw3r2', 'template_ay9huah', form.current, {
        publicKey: 'qcSq9y5XR8GHZNTJn',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    }
    const [isEnquiring, setIsEnquiring] = useState(false);
    function handleStartEnquire(state){
        setIsEnquiring(state);
    }
    const [formSectionIndex, setFormSectionIndex] = useState(0);

    function handleChangeFormSectionIndex(changeAmount){
        setFormSectionIndex((formSectionIndex) => formSectionIndex + changeAmount);
    }
    
    const [selectedInterest, setSelectedInterest] = useState(null);
    function handleSelectedInterest(selected){
        if(selectedInterest !== selected){
            setSelectedInterest(selected);
        }
    }

    return (
        <div className={styles.form_container}>
            {!isEnquiring ? (<div className={styles.button_container}>
                <button className={styles.enquire_button} onClick={() => handleStartEnquire(true)}>Enquire Now</button>
            </div>) :
            (<form ref={form} onSubmit={sendEmail} className={styles.form}>
                {formSectionIndex === 0 ? 
                <><div className={styles.form_field}>
                    <label className={styles.form_label}>Name</label>
                    <input className={styles.form_input} type="text" name="user_name" />
                </div>
                <div className={styles.form_field}>
                    <label className={styles.form_label}>Email</label>
                    <input className={styles.form_input} type="email" name="user_email" />
                </div>
                <div className={styles.form_field}>
                    <label className={styles.form_label}>Country of residence</label>
                    <input className={styles.form_input} type="text" name="origin" />
                </div>
                <SingleSelectCheckbox updateSelected={handleSelectedInterest} options={["I want to learn more about the process of buying property in Lombok as a foreigner", "I want to create a company in Indonesia so I can purchase property in Lombok", "I have created a company in Indonesia and now I want to purchase property in Lombok"]}/>
                <div className={styles.button_container}><button type='button' className={styles.next_button} onClick={() => handleChangeFormSectionIndex(1)}>Next</button>
                </div></> : null}
                {/*<div className={styles.form_field}>
                    <label className={styles.form_label}>Budget</label>
                    <select className={styles.form_input} name="budget">
                        <option className={styles.option_field} value="less than 100k">less than $100,000 USD</option>
                        <option className={styles.option_field} value="less than 250k">less than $250,000 USD</option>
                        <option className={styles.option_field} value="less than 500k">less than $500,000 USD</option>
                        <option className={styles.option_field} value="less than 750k">less than $750,000 USD</option>
                        <option className={styles.option_field} value="less than 1M">less than $1000,000 USD</option>
                        <option className={styles.option_field} value="1M+">more than $1000,000 USD</option>
                    </select>
                </div>
                <div className={styles.form_field}>
                    <label className={styles.form_label}>Minimum land size</label>
                    <select className={styles.form_input} name="land_size">
                        <option className={styles.option_field} value="less than 100k">less than $100,000 USD</option>
                        <option className={styles.option_field} value="less than 250k">less than $250,000 USD</option>
                        <option className={styles.option_field} value="less than 500k">less than $500,000 USD</option>
                        <option className={styles.option_field} value="less than 750k">less than $750,000 USD</option>
                        <option className={styles.option_field} value="less than 1M">less than $1000,000 USD</option>
                        <option className={styles.option_field} value="1M+">more than $1000,000 USD</option>
                    </select>
                </div>
                <div className={styles.form_field}>
                    <label className={styles.form_label}>Investment plan</label>
                    <select className={styles.form_input} name="interest_type">
                        <option className={styles.option_field} value="short_hold">short hold (sell property within 5 years)</option>
                        <option className={styles.option_field} value="medium_hold">medium hold (sell property within 10 years)</option>
                        <option className={styles.option_field} value="long_hold">long hold (sell property after 10+ years)</option>
                        <option className={styles.option_field} value="developer">build a business</option>
                        <option className={styles.option_field} value="permanent">permanent</option>
                    </select>
                </div>
                <div className={styles.center_button}>
                    <input type="submit" value="Send" />
                </div>*/}
              
            </form>)}
            
            
        </div>
        
      );
}

export default InfoForm;