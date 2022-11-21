import styles from './Feed.module.css'
import Image from 'next/image'
import Profile from '../assets/profile2.png'
import Verified from '../assets/verified.png'

export default function Post() {
    return (
        <div className={styles.build}>
            <div className={styles.Bigbox}>
                <div className={styles.box}>
                    <div className={styles.post}>
                    <main>
                        <div>
                        <Image src={Profile} alt='profile' width={40} height={40}/>
                        <section>
                        <div className={styles.name}>
                            saltï 
                            <Image src={Verified} alt='verified check' width={15} height={15} className={styles.verified}/>
                        </div>
                        <div className={styles.username}>@salti.lens</div>
                        </section>
                        </div>
                        <h4>9 minutes ago</h4>
                    </main>


                    </div>
                </div>
            </div>
        </div>
    )
}