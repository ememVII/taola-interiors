import { Link } from 'react-router-dom'
import {
  HospitalityHomeProject,
  CorporateHomeProject,
  ResidentialHomeProject,
  CommercialHomeProject,
  FurnitureProductionHomeProject,
  tiBadge,
} from '../../utils/imgs'
import SectionHeader from '../UI/SectionHeader/SectionHeader'
import styles from './Home.module.css'

function MainProjects() {
  return (
    <section className={`${styles.projects}`}>
      <img
          src={tiBadge}
          alt="ti Badge"
          className={`${styles.projectsTiBadge}`}
        />
      <SectionHeader
        header={'Projects'}
        content={
          '“ it’s not an imitation nor a trend.. it’s an identity unique to each person”'
        }
      />
      <div className="row g-5 d-flex justify-content-around text-center position-relative">
        {[
          ['hospitality', 'Hospitality', HospitalityHomeProject],
          ['corporate', 'Corporate', CorporateHomeProject],
          ['commercial', 'Commercial', CommercialHomeProject],
          ['residential', 'Residential', ResidentialHomeProject],
          ['furniture', 'Furniture Production', FurnitureProductionHomeProject],
        ].map(([projectId, projectName, projectImg], index) => (
          <div className="col-6 col-lg-4" key={projectId}>
            <div className={`${styles.singleProject}`} key={index}>
              <Link to={`/projects/${projectId}`}>
                <h2>{projectName}</h2>
                <img
                  src={projectImg}
                  alt={projectName}
                  className={styles.projectImg}
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MainProjects
