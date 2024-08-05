import { useParams } from 'react-router-dom'
import styles from './SingleProject.module.css'
import { projectsData } from '../../data/projects'
import { LeftArrowDark } from '../../utils/imgs'
import { Link } from 'react-router-dom'
import NotFound from '../NotFound/NotFound'
import { useEffect, useState } from 'react'

function SingleProject() {
  const { projectId, subProjectId } = useParams()

  //Projects
  const project = projectsData.find(p => p.id === projectId)
  // Check if no projects
  if ((!project, project.notClickable)) {
    return <NotFound />
  }

  // SubProjects
  const subProject = project.subProjects.find(sp => sp.id === subProjectId)
  // Check if no subProjects
  if (!subProject) {
    return <NotFound />
  }

  const [currentIndex, setCurrentIndex] = useState(0)
  const [showLightbox, setShowLightbox] = useState(false)

  // Reset currentIndex when subProjectId changes
  useEffect(() => {
    setCurrentIndex(0) // Reset currentIndex
    setShowLightbox(false)
  }, [subProjectId])

  // Distructure
  const { title, scope, images, fullScreenImages } = subProject

  const openLightbox = index => {
    setCurrentIndex(index)
    setShowLightbox(true)
  }

  const closeLightbox = () => {
    setShowLightbox(false)
  }

  // const nextImage = () => {
  //   setCurrentIndex(prevIndex =>
  //     prevIndex === fullScreenImages.length - 1 ? 0 : prevIndex + 1
  //   )
  // }

  // const prevImage = () => {
  //   setCurrentIndex(prevIndex =>
  //     prevIndex === 0 ? fullScreenImages.length - 1 : prevIndex - 1
  //   )
  // }

  const nextImage = () => {
    setCurrentIndex(prevIndex => {
      const newLength = subProject.fullScreenImages.length
      return prevIndex === newLength - 1 ? 0 : prevIndex + 1
    })
  }

  const prevImage = () => {
    setCurrentIndex(prevIndex => {
      const newLength = subProject.fullScreenImages.length
      return prevIndex === 0 ? newLength - 1 : prevIndex - 1
    })
  }

  // Event listener for keyboard arrow keys
  useEffect(() => {
    const handleKeyPress = event => {
      if (event.key === 'ArrowRight') {
        nextImage()
      } else if (event.key === 'ArrowLeft') {
        prevImage()
      }
    }

    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [subProject])

  const thumbnails = images.map((path, i) => (
    <div key={i} className="col-sm-auto col-md-auto">
      <img
        src={`${path}`}
        className={styles['thumbnail-image']}
        onClick={() => openLightbox(i)}
        loading="lazy"
      />
    </div>
  ))

  const fullImages = fullScreenImages.map((path, i) => path)
  
  return (
    <>
      <div className={styles.singleProject}>
        <div className="d-flex mb-4">
          <Link to="/projects" className="me-3">
            <img src={LeftArrowDark} alt="back to projects" width={30} />
          </Link>
          <div>
            <h3>{title}</h3>
            <p>{scope}</p>
          </div>
        </div>

        {showLightbox ? (
          <div className={styles['lightbox-overlay']}>
            <div className={styles.lightbox}>
              <button className={styles['close-btn']} onClick={closeLightbox}>
                <i className="fa-solid fa-xmark"></i>
              </button>
              <button className={styles['prev-btn']} onClick={prevImage}>
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <img src={fullImages[currentIndex]} loading="lazy" />
              <button className={styles['next-btn']} onClick={nextImage}>
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        ) : (
          <div className="row g-5 text-center d-flex justify-content-center">
            {thumbnails}
          </div>
        )}
      </div>
    </>
  )
}

export default SingleProject
