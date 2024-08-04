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
      <div className="row g-5 d-flex justify-content-around text-center position-relative">
        {[
          ['hospitality', 'Hospitality', HospitalityHomeProject],
          ['corporate', 'Corporate', CorporateHomeProject],
          ['residential', 'Residential', ResidentialHomeProject],
          ['commercial', 'Commercial', CommercialHomeProject],
          ['furniture', 'Furniture Production', FurnitureProductionHomeProject],
        ].map(([projectId, projectName, projectImg], index) => (
          <div className="col-12 col-lg-4 flex-grow-1" key={projectId}>
            <div
              className={`${styles.singleProject} position-relative`}
              key={index}
            >
              <Link to={`/projects/${projectId}`}>
                <img
                  src={projectImg}
                  alt={projectName}
                  className={styles.projectImg}
                  loading="lazy"
                />
                <h2 className="position-absolute bottom-0 end-50">
                  {projectName}
                </h2>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MainProjects
