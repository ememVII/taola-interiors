import styles from './ContactUs.module.css'
import Button from '../UI/Button/Button'
import contactData from '../../data/contact.json'
import { socialLinks } from '../../data/social-links'
import { Contact } from '../../utils/imgs'
import { Link } from 'react-router-dom'

function ContactUs() {
  return (
    <>
      <section id={styles.contact}>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-4">
              <img src={Contact} alt="contact_img" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <div className={styles.content}>
                <h2 className="mb-4">{contactData.title}</h2>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <div
                      className={`${styles.column_One} position-relative ps-3`}
                    >
                      {contactData.contactList.slice(0, 2).map((contact, i) => (
                        <div key={i}>
                          <h3>{contact.title}</h3>
                          <p>{contact.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className={`${styles.column_Two} position-relative ps-3`}
                    >
                      {contactData.contactList.slice(2, 4).map((contact, i) => (
                        <div key={i}>
                          <h3>{contact.title}</h3>
                          <p className="mb-0 pb-0">
                            {contact.description.tel_One}
                            <Link to="mailto: taola@taolaegypt.com">
                              {contact.description.mail_one}
                            </Link>
                          </p>
                          <p>{contact.description.tel_Two}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={`${styles.media} mt-5`}>
                  <Link to="mailto: taola@taolaegypt.com">
                    <Button />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactUs
