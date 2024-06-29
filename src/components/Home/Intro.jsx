import { tiBadge, homeIntro01, homeIntro02, homeIntro03, homeIntro04 } from '../../utils/imgs'
import HeroSlideShow from '../UI/HeroSlideShow/HeroSlideShow'
import styles from './Home.module.css'

function Intro() {
  return (
    <div className="d-flex justify-content-center">
      <section className={`${styles.intro} row justify-content-between`}>
        {/* <h1 className={`${styles.heroSignature}`}>Taola</h1> */}
        <div className={`${styles.introDetails} pt-5 col-12 col-lg-6`}>
          <div className="">
            <h1 className={`${styles.introHeading}`}>We Believe</h1>

            <p className="lh-lg">
              That every person has the right to live in a space that expresses
              his true authentic self.. <br /> Your home, work place or project
              is an extension of who you really are. <br /> We help people
              create this space. we help them be THEMSELVES.
            </p>
          </div>

          <div>
            <h1 className={`${styles.introHeading}`}>What we do</h1>

            <p className="lh-lg">
              We design & deliver beautiful hotels, luxury homes & innovative
              workplaces. <br /> From concept to creation we provide full
              interior design packages & turn key projects
            </p>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          {/* <img
            src={tiBadge}
            alt="ti Badge"
            className={`${styles.IntroFlower}`}
          /> */}
          {/* <img
            src={homeIntro01}
            alt="interior design"
            className={`${styles.introImg}`}
          /> */}
          <HeroSlideShow />
        </div>
      </section>
    </div>
  )
}

export default Intro
