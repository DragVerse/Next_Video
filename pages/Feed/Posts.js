/* eslint-disable react/no-unescaped-entities */
import styles from './Feed.module.css'
import Image from 'next/image'
import Profile from '../assets/profile2.png'
import Profile2 from '../assets/Avatar.jpg'
import Profile3 from '../assets/profile.png'
import Verified from '../assets/verified.png'
import Comment from '../assets/comment.png'
import Transimit from '../assets/transmit.png'
import Heart from '../assets/heart.png'
import Brower from '../assets/brower.png'
import Menu from '../assets/menu.png'
import PostPic from '../assets/postpic.png'


export default function Post() {
    return (
        <div className={styles.build2}>
            <div className={styles.Bigbox}>
                <div className={styles.box}>
                    <div className={styles.post}>
                        <main>
                            <div>
                                <Image src={Profile} alt='profile' width={40} height={40} />
                                <section>
                                    <div className={styles.name}>
                                        saltï
                                        <Image src={Verified} alt='verified check' width={15} height={15} className={styles.verified} />
                                    </div>
                                    <div className={styles.username}>@salti.lens</div>
                                </section>
                            </div>
                            <h4>9 minutes ago</h4>
                        </main>
                        <div className={styles.text}>
                            <span>I am so proud of all the hard work that the dragverse team it’s putting into buildin this network - I am a lucky drag queen!💋</span>
                            <div className={styles.react}>
                                <li><Image src={Comment} alt='' width={20} height={20} /></li>
                                <li><Image src={Transimit} alt='' width={20} height={20} /></li>
                                <li><Image src={Heart} alt='' width={20} height={20} /></li>
                                <li><Image src={Brower} alt='' width={20} height={20} /></li>
                                <li><Image src={Menu} alt='' width={20} height={20} /></li>
                            </div>
                        </div>

                    </div>

                    <div className={styles.post}>
                        <span className={styles.spanNot}>
                            <Image src={Transimit} alt='' width={16} height={16} />
                            <h4>Nathan P Van Assen </h4>
                            <h5>mirrored the post</h5>
                        </span>
                        <main>
                            <div>
                                <Image src={Profile2} alt='profile' width={40} height={40} />
                                <section>
                                    <div className={styles.name}>
                                        Jessica

                                    </div>
                                    <div className={styles.username}>@jessicaelawson.lens</div>
                                </section>
                            </div>
                            <h4>3 hours ago</h4>
                        </main>
                        <div className={styles.text}>
                            <span>Remove ALL YOUR MONEY from FTX before it's too late!
                                <br />
                                <br />
                                If you enjoyed this video, please like, mirror, and follow @jessicaelawson.lens
                                <br />
                                <br />
                                Want more videos & content? Follow me on web2 at:
                                - Twitter: jessicalawson92
                                - Instagram: jessicaelawson
                                - TikTok: jessicaelawson
                                - Youtube: https://www.youtube.com/channel/UC0YIAI2-7coJ281Liq_OSMg
                                <br />
                                <br />

                                Comment below with any videos you'd like me to make!

                                <iframe className={styles.video} width="560" height="305" src="https://www.youtube.com/embed/jwmS1gc9S5A?start=15" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                
                            </span>
                            <div className={styles.react}>
                                <li><Image src={Comment} alt='' width={20} height={20} /></li>
                                <li><Image src={Transimit} alt='' width={20} height={20} /></li>
                                <li><Image src={Heart} alt='' width={20} height={20} /></li>
                                <li><Image src={Brower} alt='' width={20} height={20} /></li>
                                <li><Image src={Menu} alt='' width={20} height={20} /></li>
                            </div>
                        </div>

                    </div>

                    <div className={styles.post}>
                        <main>
                            <div>
                                <Image src={Profile3} alt='profile' width={40} height={40} />
                                <section>
                                    <div className={styles.name}>
                                        Nathan P Van Assen
                                    </div>
                                    <div className={styles.username}>@vancat.lens</div>
                                </section>
                            </div>
                            <h4>9 days ago</h4>
                        </main>
                        <div className={styles.text}>
                            <span>K I just went through and followed everyone with a handle who’s followed me in the past month so cmon let me see that good content

                                <Image src={PostPic} alt='' width={500} height={305} className={styles.video} />
                            </span>
                            <div className={styles.react}>
                                <li><Image src={Comment} alt='' width={20} height={20} /></li>
                                <li><Image src={Transimit} alt='' width={20} height={20} /></li>
                                <li><Image src={Heart} alt='' width={20} height={20} /></li>
                                <li><Image src={Brower} alt='' width={20} height={20} /></li>
                                <li><Image src={Menu} alt='' width={20} height={20} /></li>
                            </div>
                        </div>

                    </div>

                    <div className={styles.post}>
                        <main>
                            <div>
                                <Image src={Profile} alt='profile' width={40} height={40} />
                                <section>
                                    <div className={styles.name}>
                                        saltï
                                        <Image src={Verified} alt='verified check' width={15} height={15} className={styles.verified} />
                                    </div>
                                    <div className={styles.username}>@salti.lens</div>
                                </section>
                            </div>
                            <h4>9 minutes ago</h4>
                        </main>
                        <div className={styles.text}>
                            <div>
                                <span>
                                    I am so proud of all the hard work that the dragverse team it’s putting into buildin this network - I am a lucky drag queen!💋
                                </span>
                            </div>
                            <div className={styles.react}>
                                <li><Image src={Comment} alt='' width={20} height={20} /></li>
                                <li><Image src={Transimit} alt='' width={20} height={20} /></li>
                                <li><Image src={Heart} alt='' width={20} height={20} /></li>
                                <li><Image src={Brower} alt='' width={20} height={20} /></li>
                                <li><Image src={Menu} alt='' width={20} height={20} /></li>
                            </div>
                        </div>

                    </div>

                    <div className={styles.post}>
                        <main>
                            <div>
                                <Image src={Profile} alt='profile' width={40} height={40} />
                                <section>
                                    <div className={styles.name}>
                                        saltï
                                        <Image src={Verified} alt='verified check' width={15} height={15} className={styles.verified} />
                                    </div>
                                    <div className={styles.username}>@salti.lens</div>
                                </section>
                            </div>
                            <h4>9 minutes ago</h4>
                        </main>
                        <div className={styles.text}>
                            <div>
                                <span>
                                    I am so proud of all the hard work that the dragverse team it’s putting into buildin this network - I am a lucky drag queen!💋
                                </span>
                            </div>
                            <div className={styles.react}>
                                <li><Image src={Comment} alt='' width={20} height={20} /></li>
                                <li><Image src={Transimit} alt='' width={20} height={20} /></li>
                                <li><Image src={Heart} alt='' width={20} height={20} /></li>
                                <li><Image src={Brower} alt='' width={20} height={20} /></li>
                                <li><Image src={Menu} alt='' width={20} height={20} /></li>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}