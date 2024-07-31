import { LoadingLogo } from '../../../utils/imgs'
import styles from './Loading.module.css'

function Loading() {
  return (
    <div className={styles.loading}>
      <video autoPlay muted>
        <source src="videos/loading.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    // <div className={styles.loading}>
    //     <img src={LoadingLogo} className='img-fluid'/>
    // </div>
  )
}

export default Loading
