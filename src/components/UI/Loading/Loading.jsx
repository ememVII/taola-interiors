import { LoadingLogo } from '../../../utils/imgs'
import styles from './Loading.module.css'

function Loading() {
    return (
        <div className={styles.loading}>
            <img src={LoadingLogo} className='img-fluid'/>
        </div>
    )
}

export default Loading
