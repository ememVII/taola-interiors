import styles from './Button.module.css'

function Button(props) {
  
  const btnColor = props.light ? styles.lightBtn : styles.darkBtn
  
  return (
    <>
      <button className={btnColor}>Schedule an appointment</button>
    </>
  )
}

export default Button