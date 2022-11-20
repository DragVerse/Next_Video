import Image from 'next/image'
import Navbar from '../Navbar/nav'
import styles from './Feed.module.css'
import Profile from '../assets/profile.png'
import Edit from '../assets/Edit.png'
import Burger from '../assets/Burger.png'
import Star from '../assets/Star.png'
import Settings from '../assets/settings.png'

export default function feed() {
    return (
        <div className={styles.build}>
            <Navbar />
            <div className={styles.contain}>
                <div className={styles.container}>
                    <div className={styles.container1}>
                        <div className={styles.search}>
                            <div className={styles.imgIn}>
                                <Image src={Profile} alt='profile' width={40} height={40} />
                                <input type='create-post' placeholder="What’s the tea?" className={styles.input} />
                            </div>
                            <Image src={Edit} alt='Edit' width={23} height={23} />

                        </div>
                        <div className={styles.widget}>
                            <div className={styles.widget1}>
                                <button className={styles.button1}>
                                    <Image src={Burger} alt='hamburger' height={25} width={25} />
                                    <h3>Timeline</h3>
                                </button>
                                <button className={styles.button2}>
                                    <Image src={Star} alt='star' height={23} width={23} />
                                    <h3>Highlights</h3>
                                </button>
                            </div>
                            <Image src={Settings} alt='settings' height={20} width={20} />
                        </div>

                    </div>
                    <div className={styles.container2}>

                    </div>
                </div>
            </div>
        </div>
    )
}