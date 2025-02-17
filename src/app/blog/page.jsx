import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

function Blog() {
  return (
    <div className={styles.mainContainer}>
      <Link href="/blog/textId" className={styles.container} >
          <div className={styles.imageContainer}>
            <Image
              src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontana-di-trevi-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>Text</h1>
            <p className={styles.desc}>Desc</p>
          </div>
        </Link>
      <Link href="/blog/textId" className={styles.container}>
          <div className={styles.imageContainer}>
            <Image
              src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontana-di-trevi-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>Text</h1>
            <p className={styles.desc}>Desc</p>
          </div>
        </Link>
      <Link href="/blog/textId" className={styles.container}>
          <div className={styles.imageContainer}>
            <Image
              src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontana-di-trevi-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>Text</h1>
            <p className={styles.desc}>Desc</p>
          </div>
        </Link>
      
    </div>
  )
}

export default Blog