import styles from "./style";

const App = () => (
  <div className='bg-primary w-full overflow-hidden'>

    // NAVIGATION BAR
    <div className={`${styles.paddingX}} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        Navbar
      </div>
    </div>

    // HERO SECTION
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        Hero
      </div>
    </div>

  </div>
);

export default App