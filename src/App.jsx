import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {
  About,
  Clients,
  Contact,
  Footer,
  Home,
  Loading,
  Navbar,
  ProjectsPage,
  Services,
} from './utils/pages'
import SingleProject from './pages/SingleProject/SingleProject'
import NotFound from './pages/NotFound/NotFound'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 100)

    if (isLoading) {
      document.body.classList.add('disable-scroll')
    } else {
      document.body.classList.remove('disable-scroll')
    }

    return () => {
      document.body.classList.remove('disable-scroll')
    }
  }, [isLoading])

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <main className="my-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:projectId" element={<ProjectsPage />} />

              {/* <Route path="/projects/:projectId" element={<FilteredProject />} /> */}
              <Route
                path="/:projectId/:subProjectId"
                element={<SingleProject />}
              />

              <Route path="*" element={<NotFound />} />

              <Route path="/services" element={<Services />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </>
      )}

    </>
  )
}

export default App
