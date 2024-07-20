import styles from './Clients.module.css'
import { clientLogo } from '../../utils/clients'

function Clients() {
  const altLogo = [
    'marriott',
    'sheraton',
    'crcica',
    'abdelraouf',
    'bricks4kidz',
    'polyserve',
    'lantern'
  ]

  return (
    <section className={styles.clients}>
      <h1>Proud to partner with</h1>
      <div className="row row-cols- row-cols-md-3">
        {clientLogo.map((logo, i) => (
          <div className="col py-5 d-flex justify-content-center align-items-center" key={i}>
            <div className={styles['client-img']}>
              <img src={logo} alt={altLogo[i]} className="img-fluid" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients
