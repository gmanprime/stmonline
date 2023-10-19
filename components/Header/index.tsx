import styles from "./style.module.scss"
import Nav from  "./Nav"

function Header() {
  return (
    <div className={styles.main}>
      <Nav />    
    </div>
  )
}

export default Header