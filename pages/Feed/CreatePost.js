import Image from 'next/image'
import styles from './Feed.module.css'
import Bold from '../assets/bold.svg'
import Italics from '../assets/italic.svg'
import Codesvg from '../assets/code.svg'
import Cancel from '../assets/Cancel.svg'
import ShareGroup from '../assets/ShareGroup.svg'
import AddDocu from '../assets/AddDocument.svg'
import AddGif from '../assets/AddGif.svg'
import AddPhoto from '../assets/AddPhoto.svg'
import Write from '../assets/Edit.svg'
import { useState } from 'react'

export default function CreatePost() {
    const [show, setShow] = useState(true)

    const handleShow = () => {
        setShow(false)
    }
    if (show === false) {
        return null
    }
    else {

        return (
            <div className={styles.PostBody}>
                <div className={styles.component}>
                    <span className={styles.span}>
                        <h4>CREATE A POST</h4>
                        <Image src={Cancel} alt='' height={15} width={15} onClick={handleShow} />
                    </span>
                    <div className={styles.icons}>
                        <Image src={Bold} alt='' height={22} width={22} />
                        <Image src={Italics} alt='' height={22} width={22} />
                        <Image src={Codesvg} alt='' height={21} width={21} />
                        <h5>Beta</h5>
                    </div>
                    <div className={styles.write}>
                        <textarea type='textarea' rows={5}
                            cols={5} placeholder='Write your text here...' />
                    </div>
                    <div className={styles.PostWith}>
                        <Image src={AddPhoto} alt='' height={20} width={20} />
                        <Image src={AddGif} alt='' height={20} width={20} />
                        <Image src={AddDocu} alt='' height={20} width={20} />
                        <Image src={ShareGroup} alt='' height={20} width={20} />

                        <h6>
                            <Image src={Write} alt='' height={20} width={20} />
                            Post</h6>
                    </div>
                </div>
            </div>
        )
    }
}