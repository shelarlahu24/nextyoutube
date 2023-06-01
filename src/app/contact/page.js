import styles from './contact.module.css'
import ContactCard from '../components/ContactCard'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <ContactCard />

        <div className={styles.contact_section}>
          <h2>
            We'd love to hear <span>from you</span>
          </h2>
          <ContactForm />
        </div>

        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7546.922064770454!2d72.80248819357905!3d18.95523600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf75690ba705%3A0xea46bbbb79da647e!2z4KSX4KS_4KSw4KSX4KS-4KS1IOCkmuCljOCkquCkvuCkn-ClgCDgpK7gpYHgpILgpKzgpIg!5e0!3m2!1sen!2sin!4v1685420121716!5m2!1sen!2sin'
          width={600}
          height={450}
          style={{ border: 0 }}
          allowFullScreen=''
          loading='lazy'
          className={styles.mapping}
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>

      </div>
    </>
  )
}

export default Contact
