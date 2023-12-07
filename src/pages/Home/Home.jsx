import About from '../../components/Home/About'
import Intro from '../../components/Home/Intro'
import OurServices from '../../components/Home/OurServices'
import MainProjects from '../../components/Home/MainProjects'

function Home() {
  return (
    <>
      <Intro />
      <MainProjects/>
      <About/>
      <OurServices />
    </>
  )
}

export default Home
