import {
  constructionWork,
  furnitures,
  interiorDesign,
  partnership,
  plan,
  vase,
} from '../../utils/imgs'
import styles from './Home.module.css'
import SectionHeader from '../UI/SectionHeader/SectionHeader'

function OurServices() {
  return (
    <section className={`${styles.services}`}>
      <SectionHeader header="Services" />

      <div>
        <div className={`${styles.servicesContent} row position-relative`}>
         <div className={`${styles.interiorDesign} col-6 col-lg-3 flex-grow-1 g-5 pb-5 position-relative`}>
            <img src={interiorDesign} alt="interior Design" />
            <p>Interior Design</p>
            <div className={styles.dividerVertical}></div>
            <div className={styles.dividerHorizontal}></div>
          </div>
          
          <div className={`${styles.furnitures} col-6 col-lg-3 flex-grow-1 g-5 pb-5 position-relative`}>
            <img src={furnitures} alt="Furniture Design & production" />
            <p>Furniture Design & production</p>
            <div className={styles.dividerVertical}></div>
            <div className={styles.dividerHorizontal}></div>
          </div>
          
          <div className={`${styles.constructionWork} col-6 col-lg-3 flex-grow-1 g-5 pb-5 position-relative`}>
            <img src={constructionWork} alt="Construction work" />
            <p>Construction work</p>
            <div className={styles.dividerVertical}></div>
            <div className={styles.dividerHorizontal}></div>
          </div>
          
          <div className={`${styles.partnership} col-6 col-lg-3 flex-grow-1 g-5 pb-5 position-relative`}>
            <img src={partnership} alt="Turn key projects" />
            <p>Turn key projects</p>
            <div className={styles.dividerVertical}></div>
            <div className={styles.dividerHorizontal}></div>
          </div>
          
          <div className={`${styles.vase} col-6 col-lg-3 flex-grow-1 g-5 pb-5 position-relative`}>
            <img src={vase} alt="FF&E / Accessories selection " />
            <p>FF&E / Accessories selection </p>
            <div className={styles.dividerVertical}></div>
            <div className={styles.dividerHorizontal}></div>
          </div>
          
          <div className={`col-6 col-lg-3 flex-grow-1 g-5 pb-5 position-relative`}>
            <img src={plan} alt="Space planning" />
            <p>Space planning</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurServices