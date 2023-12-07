import { Link } from 'react-router-dom'
import {
  HospitalityHomeProject,
  CorporateHomeProject,
  ResidentialHomeProject,
  CommercialHomeProject,
  FurnitureProductionHomeProject,
} from '../../utils/imgs'
import SectionHeader from '../UI/SectionHeader/SectionHeader'
import styles from './Home.module.css'

function MainProjects() {
  return (
    <section className={`${styles.projects}`}>
      <SectionHeader
        header={'Projects'}
        content={
          '“ it’s not an imitation nor a trend.. it’s an identity unique to each person”'
        }
      />
      <div className="row gx-0">
        {[
          ['hospitality', 'Hospitality', HospitalityHomeProject],
          ['corporate', 'Corporate', CorporateHomeProject],
          ['residential', 'Residential', ResidentialHomeProject],
          ['commercial', 'Commercial', CommercialHomeProject],
          ['furniture', 'Furniture Production', FurnitureProductionHomeProject],
        ].map(([projectId, projectName, projectImg], index) => (
          <div
            className={`${styles.singleProject} col-6 col-lg-2 position-relative`}
            key={index}
          >
            <Link to={`/projects/${projectId}`}>
              <h2 className="position-absolute fs-4">{projectName}</h2>
              <img
                src={projectImg}
                alt={projectName}
                className={styles.projectImg}
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MainProjects
