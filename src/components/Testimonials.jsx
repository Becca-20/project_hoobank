import { feedback } from '../constants';
import styles from '../style';
import FeedbackCard from './FeedbackCard';

const Testimonials = () => (
  <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    
    {/* TO DO: gradient */}
    <div />

    <div className='w-full flex justify-between items-center md:flex-row flex-col sd:mb-16 mb-16 relative z-[1]'>
      <h1 className={styles.heading2}>What people are <br className='sm:block hidden'/> saying about us</h1>
    </div>

  </section>
)

export default Testimonials