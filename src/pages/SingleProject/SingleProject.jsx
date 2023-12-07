import { useParams } from 'react-router-dom'
import styles from './SingleProject.module.css'
import { projectsData } from '../../data/projects'
import { LeftArrowDark } from '../../utils/imgs'
import { Link } from 'react-router-dom'
import NotFound from '../NotFound/NotFound'

function SingleProject() {
  const { projectId, subProjectId } = useParams()

  //Projects 
  const project = projectsData.find(p => p.id === projectId)
  // Check if no projects
  if(!project, project.notClickable) {
    return <NotFound/>
  }
  
  // SubProjects
  const subProject = project.subProjects.find(sp => sp.id === subProjectId)
  // Check if no subProjects
  if(!subProject) {
    return <NotFound/>
}
  
  const { title, info, images } = subProject

  return (
    <>
      <div className={styles.singleProject}>
        <div className="d-flex">
          <Link to="/projects" className="me-3">
            <img src={LeftArrowDark} alt="back to projects" width={30} />
          </Link>
          <div>
            <h3>{title}</h3>
            <p>{info}</p>
          </div>
        </div>
        <div className="row text-center">
          {images.map((path, i) => (
              <div key={i} className="project-image col-md-4 my-3">
                <img src={`${path}`} />
              </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default SingleProject
