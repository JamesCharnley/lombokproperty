import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import styles from './Form.module.css';

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

    return (
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
            <div className={styles.form_field}>
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
            <div className={styles.form_field}>
                <label className={styles.form_label}>Budget</label>
                <select className={styles.form_input} name="budget">
                    <option value="less than 100k">less than $100,000 USD</option>
                    <option value="less than 250k">less than $250,000 USD</option>
                    <option value="less than 500k">less than $500,000 USD</option>
                    <option value="less than 750k">less than $750,000 USD</option>
                    <option value="less than 1M">less than $1000,000 USD</option>
                    <option value="1M+">more than $1000,000 USD</option>
                </select>
            </div>
            <div className={styles.form_field}>
                <label className={styles.form_label}>Minimum land size</label>
                <select className={styles.form_input} name="land_size">
                    <option value="less than 100k">less than $100,000 USD</option>
                    <option value="less than 250k">less than $250,000 USD</option>
                    <option value="less than 500k">less than $500,000 USD</option>
                    <option value="less than 750k">less than $750,000 USD</option>
                    <option value="less than 1M">less than $1000,000 USD</option>
                    <option value="1M+">more than $1000,000 USD</option>
                </select>
            </div>
            <div className={styles.form_field}>
                <label className={styles.form_label}>Investment plan</label>
                <select className={styles.form_input} name="interest_type">
                    <option value="short_hold">short hold (sell property within 5 years)</option>
                    <option value="medium_hold">medium hold (sell property within 10 years)</option>
                    <option value="long_hold">long hold (sell property after 10+ years)</option>
                    <option value="developer">build a business</option>
                    <option value="permanent">permanent</option>
                </select>
            </div>
            <div className={styles.center_button}>
                <input type="submit" value="Send" />
            </div>
          
        </form>
      );
}

export default InfoForm;