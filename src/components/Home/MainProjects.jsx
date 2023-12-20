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
      <div className="row gx-3">
        {[
          ['hospitality', 'Hospitality', HospitalityHomeProject],
          ['corporate', 'Corporate', CorporateHomeProject],
          ['residential', 'Residential', ResidentialHomeProject],
          ['commercial', 'Commercial', CommercialHomeProject],
          ['furniture', 'Furniture Production', FurnitureProductionHomeProject],
        ].map(([projectId, projectName, projectImg], index) => (
          <div className='col-6 col-lg-2 flex-grow-1'>
            <h2>{projectName}</h2>
            <div
              className={`${styles.singleProject} position-relative`}
              key={index}
            >
              <Link to={`/projects/${projectId}`}>
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
