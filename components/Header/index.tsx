import styles from "./style.module.scss"
import Nav from  "./Navigation"

function Header() {
  return (
    <div className={styles.main}>
      <Nav />    
    </div>
  )
}

export default Header