
import Header from "../Header/Header";
import styles from "./contact.module.css";
import Image from 'next/image'


const CONTACT_INFO = [
    {
        "img": "/Images/linkedin-logo.png",
        "contactTxt":"LinkedIn",
        "redirect": "http://"
    },
    {
        "img": "/Images/gmail-logo.png",
        "contactTxt":"Email",
        "redirect": "http://"
    },
    {
        "img": "/Images/whatsapp-logo.webp",
        "contactTxt":"Whatsapp",
        "redirect": "http://"
    }
]

export default function Contact() {


  return (
    <>
        <Header headerTxt="Contact Me" subTxt="Get in Touch" />
        <div className={styles.contactWrapper}>
            {
                CONTACT_INFO.map((info, index) => {
                    return (
                        <div className={styles.contactInfo} key={index}>
                            <Image src={info.img}  width={25} height={25}  alt={info.contactTxt} style={{objectFit:'contain'}} />       
                            <div className={styles.contactText}>{info.contactTxt}</div>
                        </div>
                    )
                })
            }
        </div>
        <div className={styles.copyRightTxt}>Design and Developed By Vivek Gopalan.</div>
    </>
  );
}
