import styles from './Feed.module.css'
import Moon from '../assets/moon.svg'
import Exit from '../assets/Exit.svg'
import Free from '../assets/free.svg'
import Settings from '../assets/Settings.svg'
import User from '../assets/User.svg'
import Image from 'next/image'

export default function Userdropdown() {
    return (
        <div>
            <div className={styles.drop}>
                <div>
                    <h3>Logged in as</h3>
                    <h4>@salti.lens</h4>
                    <div className={styles.border}>
                        <div>
                            <Image src={Free} alt='' height={20} width={20} />
                            BREAKING FREE
                            </div>
                    </div>
                    <h2>
                        <Image src={User} alt='' height={20} width={20} />
                        Your Profile</h2>
                    <h2>
                        <Image src={Settings} alt='' height={20} width={20} />
                        Settings</h2>
                    <h2>
                        <Image src={Exit} alt='' height={20} width={20} />
                        Logout</h2>
                    <div className={styles.border2}>
                        <div>
                            <Image src={Moon} alt='' height={20} width={20} />
                            Dark mode
                            </div>
                    </div>
                    <h6>V0.0.0</h6>
                </div>
            </div>

        </div>
    )
}