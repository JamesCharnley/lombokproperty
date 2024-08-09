import styles from './InfoListSection.module.css';
import BackgroundImage from './BackgroundImage';

export default function LegalRequirements(){
    return (
        <div className={styles.container}>
            <div className={styles.text_section}>
                <h3 className={styles.title}>Legal Requirements</h3>
                <p className={styles.intro_paragraph}>In Indonesia, foreigners cannot directly own land. However, there are legal frameworks that allow foreign investment in property. Here are the key legal requirements for a foreigner to buy land in Lombok, Indonesia</p>
                <ul className={styles.list}>
                    <li className={styles.list_item}>
                        <p className={styles.list_item_text}><strong>Right to Use (Hak Pakai): </strong>Foreigners can obtain the Right to Use (Hak Pakai) land title, which grants them the right to use the land for a specific purpose for a certain period. This title is valid for 25 years and can be extended.</p>
                    </li>
                    <li className={styles.list_item}>
                        <p className={styles.list_item_text}><strong>Leasehold Agreements: </strong>Foreigners can enter into long-term lease agreements with Indonesian landowners, typically for periods of 25-30 years, with the possibility of extensions.</p>
                    </li>
                    <li className={styles.list_item}>
                        <p className={styles.list_item_text}><strong>Foreign-Owned Companies (PT PMA): </strong>Foreigners can set up an Indonesian company (PT PMA) that can own land and property. The company structure allows for foreign ownership and control, making it a common method for foreigners to invest in land.</p>
                    </li>
                    <li className={styles.list_item}>
                        <p className={styles.list_item_text}><strong>Nominee Arrangement: </strong>While not legally recommended due to potential risks, some foreigners use local nominees to hold land on their behalf. It's crucial to have a solid legal agreement and understand the associated risks.</p>
                    </li>
                    <li className={styles.list_item}>
                        <p className={styles.list_item_text}><strong>Due Diligence: </strong>Conducting thorough due diligence, including checking land titles, zoning regulations, and potential legal issues, is essential to ensure a secure investment.Given the complexities of Indonesian land laws, it's advisable to seek legal assistance and work with reputable local agents or consultants to navigate the process effectively.</p>
                    </li>
                </ul>
            </div>
            
            <BackgroundImage imageUrl={'/bluemonkeypalms.jpg'} width={"30%"} height={"850px"}/>
            
        </div>
    );
}