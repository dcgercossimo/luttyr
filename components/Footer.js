import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import styles from '../styles/Home.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <a
                href="https://api.whatsapp.com/send?phone=50769806834" target="_blank"
                rel="noopener noreferrer"
            >
                <span className={styles.logo}>
                    <Image src="/images/OndaLutty.svg" alt="Lutty Ramos" width={72} height={16} />
                </span>
                Lutty Ramos:{' '}
                +507 6980-6834{' '}<FaWhatsapp />
            </a>
        </footer>
    );
}