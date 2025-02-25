import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className={styles.mainDiv}>
      <h1>საკონტაქტო ინფორმაცია</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21817.80605427628!2d44.78720133547368!3d41.781865090329546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40446d8959d884ff%3A0xf7a7f069d0c642ad!2z4YOT4YOY4YOm4YOb4YOY4YOhIOGDouGDp-GDlC3hg57hg5Dhg6Dhg5nhg5g!5e1!3m2!1ska!2sge!4v1739980012465!5m2!1ska!2sge"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className={styles.contactInfo}>
        <div>
          <img src="/phone-svgrepo-com.svg" className={styles.svg} /> +995 551
          105 422
        </div>
        <div>
          <img src="/mail-svgrepo-com.svg" className={styles.svg} /> @
          feel-geo@gmail.com
        </div>
      </div>
    </div>
  );
}

export default Contact;
