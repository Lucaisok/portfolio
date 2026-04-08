import { ContactsSection } from '@/src/components/Contact/ContactsSection/ContactsSection';
import { Description } from '@/src/components/Contact/Description/Description';
import { Message } from '@/src/components/Contact/MessageSection/Message';
import styles from './page.module.css';

export const Contact = () => {
    return <section id="contact" className={styles.section}>
        <div className="site-container">
            <div className={styles.inner}>
                <Description />
                <ContactsSection />
                <Message />
            </div>
        </div>
    </section>;
};

export default Contact;