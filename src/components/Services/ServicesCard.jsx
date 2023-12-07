import styles from './Services.module.css'
import ServicesData from '../../data/services.json'

function Services() {
  return (
    <>
      <section className={styles.services}>
        <h1>Services</h1>
        <div className={`${styles['services-content']} row row-cols-1 row-cols-md-2 row-cols-lg-3`}>
          {ServicesData.servicesList.map((srv, i) => (
            <div key={i} className={`col flex-grow-1`}>
              <div className={`${styles['service-details']} my-5 
              ${i < 3 ? styles['with-divider'] : ''} ${i >= 3 ? styles['sm-with-divider'] : ''}`}>
                <img src={srv.logo} alt={srv.title} className='img-fluid' />
                <h2>{srv.title}</h2>
                <p>{srv.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Services
