import styles from './Connect.module.css'
import Image from 'next/image'
import Profile from '../assets/profile3.png'
import Profile2 from '../assets/profile4.png'
import Profile3 from '../assets/profile5.png'
import Profile4 from '../assets/profile6.png'
import Profile5 from '../assets/profile7.png'
import Follow from '../assets/Follow.png'
import UnFollow from '../assets/unfollow.png'
import verified from '../assets/verified.png'
import showmore from '../assets/showmore.svg'

export default function Connect() {
    return (
        <div className={styles.build}>
            <h3>CONNECT WITH OTHERS</h3>
            <div className={styles.bigBox}>
            <div className={styles.box}>
                <main className={styles.smallbox}>
                    <span className={styles.user}>
                    <Image src={Profile} alt='' height={40} width={40}/>
                        <div className={styles.names}>
                            <h4 className={styles.name}>Raja
                            <Image src={verified} alt='' width={15} height={15}/>
                            </h4>
                            <h6 className={styles.username}>@wagmi.lens</h6>
                        </div>
                    </span>

                    <Image src={Follow} alt='' height={30} width={45}/>
                </main>

                <main className={styles.smallbox}>
                    <span className={styles.user}>
                    <Image src={Profile2} alt='' height={40} width={40}/>
                        <div className={styles.names}>
                            <h4 className={styles.name}>RuPaul 🪄
                            <Image src={verified} alt='' width={15} height={15}/>
                            <h4 className={styles.subject}>Listening to space music</h4>
                            </h4>
                            <h6 className={styles.username}>@rupaul.lens</h6>
                        </div>
                    </span>

                    <Image src={UnFollow} alt='' height={30} width={45}/>
                </main>

                <main className={styles.smallbox}>
                    <span className={styles.user}>
                    <Image src={Profile3} alt='' height={40} width={40}/>
                        <div className={styles.names}>
                            <h4 className={styles.name}>jim
                            <Image src={verified} alt='' width={15} height={15}/>
                            </h4>
                            <h6 className={styles.username}>@0xjim.lens</h6>
                        </div>
                    </span>

                    <Image src={Follow} alt='' height={30} width={45}/>
                </main>

                <main className={styles.smallbox}>
                    <span className={styles.user}>
                    <Image src={Profile4} alt='' height={40} width={40}/>
                        <div className={styles.names}>
                            <h4 className={styles.name}>VisualFire.eth
                            </h4>
                            <h6 className={styles.username}>@visualfire.lens</h6>
                        </div>
                    </span>

                    <Image src={Follow} alt='' height={30} width={45}/>
                </main>

                <main className={styles.smallbox}>
                    <span className={styles.user}>
                    <Image src={Profile5} alt='' height={40} width={40}/>
                        <div className={styles.names}>
                            <h4 className={styles.name}>Sasi
                            <Image src={verified} alt='' width={15} height={15}/>
                            </h4>
                            <h6 className={styles.username}>@sasicodes.lens</h6>
                        </div>
                    </span>

                    <Image src={Follow} alt='' height={30} width={45}/>
                </main>

            </div>
                <main className={styles.show}>
                    <Image src={showmore} alt='' height={16} width={16}/>
                    <h5>Show more</h5>
                </main>
            </div>

            <div className={styles.socials}>
                <h5>© 2022 Dragverse</h5>
                <li>Privacy</li>
                <li>Discord</li>
                <li>Donate</li>
                <li>Status</li>
                <li>Vote</li>
                <li>Feedback</li>
                <li>Thanks</li>
                <li>GitHub</li>
            </div>
        </div>
    )
}