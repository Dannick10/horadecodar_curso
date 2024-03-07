import styles from './Header.module.css' 

const Header = () => {
  return (
    <>  
    <header className={styles.header}>
        <div>
            <p>LOGO</p>
        </div>
        <div>
            <h1>Estudando React router</h1>
        </div>
    </header>  
    </>
  )
}

export default Header