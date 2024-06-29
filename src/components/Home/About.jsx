import { tiBadge } from '../../utils/imgs'
import styles from './Home.module.css'

function About() {
  return (
    <section className={`${styles.about}`}>
      <div className={`${styles['about-content']}`}>
        <img
            src={tiBadge}
            alt="taola Badge"
            className={`${styles.tiBadge}`}
          />
        <h1>Taola “طاولة”</h1>
        <h2>“Blending Tradition with modernity”</h2>
        <div className={styles.lineDivider}></div>
        <p>
          Toala is an Arabic word for “Table”. The centerpiece that captures the
          essence of the place & brings together different <br /> people &
          different conversations. At طاولة we embrace this concept, Blending
          tradition with modernity. <br /> We believe in the power of
          authenticity & We understand that every client has a unique story that
          needs to be told.
        </p>
      </div>
    </section>
  )
}

export default About
