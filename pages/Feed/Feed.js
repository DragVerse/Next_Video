import Image from 'next/image'
import Post from './Posts'
import Navbar from '../Navbar/Nav'
import styles from './Feed.module.css'
import Profile from '../assets/profile.png'
import Write from '../assets/Write.png'
import Burger from '../assets/Burger.png'
import Star from '../assets/Star.svg'
// import Settings from '../assets/settings.png'
// import BetaCup from '../assets/BetaCup.png'
import Settings from '../assets/Slider.svg'
import BetaCup from '../assets/bottle.svg'
import ArrowRight from '../assets/Arrow right.svg'
import Stream from '../assets/streampurple.svg'
import Location from '../assets/Location.svg'
import Connect from '../Connect/Connect'
import CreatePost from './CreatePost'
import { useState } from 'react'

export default function Feed() {
    const [show, setShow] = useState(false)
    
    const handleShow = () => {
        setShow(!show)
    }
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
                            <Image src={Write} alt='Edit' width={23} height={23} onClick={handleShow}/>

                        </div>
                        {show ?   <CreatePost /> : null}
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
                            <Image src={Settings} alt='settings' height={25} width={25} />
                        </div>
                        <Post />
                    </div>
                    <div className={styles.container2}>
                        <div className={styles.card1}>
                            <h2>
                                <Image src={BetaCup} alt='' width={20} height={25} className={styles.streamImg}/>
                                Beta warning!</h2>
                            <p>The dragverse is still in the beta phase, things may break, please be patience as we build the best drag social network.</p>
                        </div>

                        <h3>START HERE</h3>

                        <div className={styles.card2}>
                            <h2>
                                <Image src={Stream} alt='' width={30} height={20} />
                                GO LIVE</h2>
                            <p>Ready to share your drag magic with the world? Star livestreaming now! 💄</p>
                            <button>GO LIVE
                                <Image src={ArrowRight} alt='' height={24} width={24}/>
                            </button>
                        </div>

                        <div className={styles.card3}>
                            <h2>
                                <Image src={Location} alt='' width={30} height={20} />
                                VISIT DRAGVERSE</h2>
                            <button>EXPLORE OUR SPATIAL SPACE
                                <Image src={ArrowRight} alt='' height={24} width={24}/>
                            </button>
                        </div>

                        <Connect />
                    </div>
                </div>
            </div>
        </div>
    )
}