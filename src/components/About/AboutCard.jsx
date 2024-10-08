import styles from './About.module.css'
import { about, aboutLayer } from '../../utils/imgs'

function About() {
  return (
    <>
      <section id={styles.about}>
        <div className="my-container">
          <div className={`${styles.Main_Title}`}>
            <h1>Who Are We</h1>
          </div>
          <div className="row d-flex gap-2">
            <div className="col-12 col-lg-6 flex-grow-1">
              <div className={`${styles.content}`}>
                <p>
                  Taola Interiors is a Cairo-based interior design studio with a
                  rich portfolio of project since 2009. The Studio was founded
                  by three partners who brought together their diverse expertise
                  to create Taola Interiors.
                </p>
                <p>
                  Founding partner Arch. Marwa El-Abd, a professional with an
                  impressive portfolio that includes notable projects such as
                  the Urban Regeneration of Downtown Cairo, a project undertaken
                  in collaboration with the Institute de Recherche "IDR". She
                  has also worked on major design projects with the esteemed
                  firm "Associates Consultants." In addition Marwa was a
                  teaching assistant at both Cairo University and the AUC,
                  further enhancing her expertise and knowledge.
                </p>
                <p>
                  Another key partner is Arch. Hala El-Shimi, who hails from a
                  family of renowned Egyptian architects, Dr. Mahmoud Elshimi &
                  Dr. Nagwa Sherif. Following their footsteps, Hala started her
                  career as an interior designer, working alongside Dr. Mohamed
                  Noaman at his prestigious firm. Taking part in exclusive
                  design projects & working with many international furniture
                  brands.
                </p>
                <p>
                  Ms. Nadia El-Hageen, our third partner, brings a unique
                  perspective to our team with an exceptional business expertise
                  as an operations manager at Arab Bank. With a decade of
                  valuable industry experience, Nadia contributes invaluable
                  insights and expertise to our projects.
                </p>
                <p>
                  Driven by a shared passion for design and unwavering attention
                  to detail, the team at Taola Interiors is dedicated to
                  ensuring client satisfaction by delivering bespoke interior
                  designs that surpasses expectations.
                </p>
              </div>
            </div>

            <div
              className={`${styles.section_img} col-12 col-lg-4 position-relative text-center `}
            >
              <img
                src={about}
                alt="about-pic"
                className="img-fluid"
                loading="lazy"
              />
              <div className={`${styles.overlay_box} position-absolute`}>
                <img
                  src={aboutLayer}
                  alt="overlay"
                  className="img-fluid"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
