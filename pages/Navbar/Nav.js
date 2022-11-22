import Image from 'next/image'
import logo from '../assets/logo.jpg'
import avatar from '../assets/Avatar.jpg'
import message from '../assets/Mail.jpg'
import notification from '../assets/Notification.png'
import stream from '../assets/stream.jpg'
import styles from './Nav.module.css'
import Userdropdown from '../Feed/Userdropdown'
import { useState } from 'react'

export default function Navbar() {
  const [show, setShow] = useState(false)
  const toggling = () => {
    setShow(!show)
  }
  return (
    <div className={styles.build}>
      <div className={styles.content}>
        <div className={styles.navbar}>
          <main><Image src={logo} alt='logo' width={100} height={100} /></main>
          <input placeholder='Search...' className={styles.input} />
          <ul className={styles.ul}>
            <li>About</li>
            <li>Explore</li>
            <li>Visit</li>
            <li>More</li>
          </ul>
          <div className={styles.social}>
            <Image src={message} alt='send message' width={25} height={25} className={styles.img} />
            <Image src={notification} alt='get notification' width={26} height={25} className={styles.img} />
            <Image src={stream} alt='start stream' width={30} height={20} className={styles.img} />
            <Image src={avatar} alt='profile' width={40} height={40} className={styles.img} onClick={toggling} />
          </div>
        </div>
        {show ? <Userdropdown /> : null }
        {/* <div
          className={styles.toggle}
          onClick={toggling}
        ></div> */}
      </div>
    </div>
  )
}
