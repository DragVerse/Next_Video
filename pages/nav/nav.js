import Image from 'next/image'
import logo from '../assets/logo.jpg'
import avatar from '../assets/Avatar.jpg'
import message from '../assets/Mail.jpg'
import notification from '../assets/Notification.png'
import stream from '../assets/stream.jpg'
import styles from './nav.module.css'

export default function Feed() {
    return(
      <div className={styles.build}>
        <div className={styles.content}>
        <div className={styles.navbar}>
          <logo><Image src={logo} alt='logo' width={100} height={100}/></logo>
          <input placeholder='Search...' className={styles.input}/>
          <ul className={styles.ul}>
            <li>About</li>
            <li>Explore</li>
            <li>Visit</li>
            <li>More</li>
          </ul>
          <div className={styles.social}>
            <Image src={message} alt='send message' width={30} height={30} className={styles.img}/>
            <Image src={notification} alt='get notification' width={30} height={30} className={styles.img}/>
            <Image src={stream} alt='start stream' width={26} height={24} className={styles.img}/>
            <Image src={avatar} alt='profile' width={50} height={50} className={styles.img}/>
          </div>
        </div>
        </div>
      </div>
    ) 
  }

  