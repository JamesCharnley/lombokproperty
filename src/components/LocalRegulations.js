import styles from './InfoListSection.module.css';
import BackgroundImage from './BackgroundImage';

export default function LocalRegulations(){
    return (
        <div className={styles.container}>
            <BackgroundImage imageUrl={'/bluemonkeypalms.jpg'} width={"30%"} height={"850px"}/>
            <div className={styles.text_section}>
                <h3 className={styles.title}>Local Regulations</h3>
                <p className={styles.intro_paragraph}>In Indonesia, foreigners cannot directly own land. However, there are legal frameworks that allow foreign investment in property. Here are the key legal requirements for a foreigner to buy land in Lombok, Indonesia</p>
                <ul className={styles.list}>
                    <li className={styles.list_item}>
                        <p className={styles.list_item_text}><strong>Building Permits and Regulations: </strong>Foreign investors must comply with local building regulations and obtain the necessary permits for construction and development on the land.</p>
                    </li>
                    <li className={styles.list_item}>
                        <p className={styles.list_item_text}><strong>Environmental Regulations: </strong>Comply with local environmental regulations, which may include obtaining necessary environmental permits and conducting environmental impact assessments if required.</p>
                    </li>
                    <li className={styles.list_item}>
                        <p className={styles.list_item_text}><strong>Zoning Laws: </strong>Ensure the land is zoned appropriately for the intended use, whether residential, commercial, or tourism development, by consulting local zoning laws.</p>
                    </li>
                    <li className={styles.list_item}>
                        <p className={styles.list_item_text}><strong>Construction Standards: </strong>Adhere to local construction standards and building codes, which govern aspects such as structural integrity, safety, and materials used.</p>
                    </li>
                    <li className={styles.list_item}>
                        <p className={styles.list_item_text}><strong>Local Community Involvement: </strong>Engage with the local community and respect customary land rights and practices, especially in rural areas.</p>
                    </li>
                    <li className={styles.list_item}>
                        <p className={styles.list_item_text}><strong>Taxation: </strong>Fulfill tax obligations related to construction, which may include land and building tax (PBB) and other local taxes.</p>
                    </li>
                    <li className={styles.list_item}>
                        <p className={styles.list_item_text}><strong>Utility Connections: </strong>Secure permits and approvals for connecting to local utilities, such as water, electricity, and sewage systems.</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}