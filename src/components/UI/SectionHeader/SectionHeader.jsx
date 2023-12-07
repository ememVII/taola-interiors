import styles from './SectionHeader.module.css'

function SectionHeader({header, content}) {
  return (
    <div className={`${styles['section-header']}`}>
      <div className={styles.lineDivider}></div>
      <h1 className="text-center">{header}</h1>
      <p className='mb-5'>
        {content}
      </p>
    </div>
  )
}

export default SectionHeader
