import { Link, useParams } from 'react-router-dom'
import { projectsData } from '../../data/projects'
import { projectsHeader } from '../../utils/imgs'
import { useEffect, useState } from 'react'
import styles from './Projects.module.css'

function Projects() {
  const { projectId } = useParams()
  const [selectedProject, setSelectedProject] = useState('')

  const handleProjectClick = categoryId => {
    setSelectedProject(categoryId)
  }
  
  // Retrieve last selected project from local storage
  useEffect(() => {
    const storedSelectedProject = localStorage.getItem('selectedProject')
    
    if (storedSelectedProject) {
      setSelectedProject(JSON.parse(storedSelectedProject))
    }
    // Check if user clicked on project from Home page
    if (projectId) {
      setSelectedProject(projectId)
    }
  }, [])
  
  // Set selected project to local storage
  useEffect(() => {
    localStorage.setItem('selectedProject', JSON.stringify(selectedProject))
  }, [selectedProject])

  return (
    <section className={styles.projects}>
      <div className={`${styles.projectsHeader}`}>
        <h1>Our work</h1>
        <div
          className={`${styles['projects-header-content']} row align-items-center`}
        >
          <div className={`${styles.details} col-lg-7`}>
            <h2>A Selection of our projects:</h2>
            <div>
              <h3>HOSPITALITY</h3>
              <p>
                Interior design & full renovation of the Nefertiti Tower at the
                Sheraton Cairo Hotel & Casino. This project was completed under
                the umbrella of Marriott int’l. Taola was responsible for the
                full package of Interior design from concept & schematic design
                to design development, Tender docs & FF&E selection. in addition
                to supervising the contractors work on site till full approval
                from Marriortt Int’l.
              </p>
            </div>
            <div>
              <h3>CORPORATE</h3>
              <p>
                Working on various corporate offices, Taola team completed many
                projects including the renovation of CRCICA (Cairo Regional
                Centre for International Commercial Arbitration). Transforming
                the outdated 1970's design into a modern state-of-the-art
                center. The center won a recognized award that same year after
                the renovation.
              </p>
            </div>
            <div>
              <h3>RESIDENTIAL</h3>
              <p>
                Taola Interiors has a passion for working on residential
                projects. The team seeks to capture the essence of each client
                and create unique spaces reflecting their personality. Taola
                offers design packages as well as turn key & furniture
                production projects.
              </p>
            </div>
            <div>
              <h3>COMMERCIAL</h3>
              <p>
                The Sky lounge in Sheraton Cairo was designed by Taola team,
                Transforming a neglected area on the 23rd floor to one of a kind
                lounge with an amazing view on the Nile. Another project is the
                New Scarabe jeweler which displays a blend between modernity &
                culture.
              </p>
            </div>
          </div>

          <div className="col-lg-4 text-center flex-grow-1">
            <img src={projectsHeader} alt="" className="img-fluid" />
          </div>
        </div>
      </div>

      <ul className={`${styles.projectsBar}`}>
        {projectsData.map((project, i) => (
          <li
            key={i}
            className={`${project.id === selectedProject ? styles.active : ''}`}
            onClick={() => handleProjectClick(project.id)}
          >
            {project.projectTitle}
          </li>
        ))}
      </ul>

      <div className={`${styles.projectsContent} row text-center`}>
        {projectsData.map(
          project =>
            project.id === selectedProject &&
            project.subProjects.map(subProject => (
              <Link
                to={`/${project.id}/${subProject.id}`}
                key={subProject.id}
                className="col-6 col-md-4"
              >
                <img
                  src={subProject.subProjectCover}
                  alt={subProject.title}
                  className="img-fluid"
                />
                <h3>{subProject.title}</h3>
                <p>{subProject.info}</p>
              </Link>
            ))
        )}
      </div>
    </section>
  )
}

export default Projects
