import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

function BlogPost() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, facilis?
          </h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, similique! Rerum officia quisquam animi error iste saepe quae dolor, non consequatur labore quia ducimus sunt facilis tenetur inventore deserunt quidem?
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/8817532/pexels-photo-8817532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/30700949/pexels-photo-30700949/free-photo-of-mysterious-river-valley-under-dramatic-clouds.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure saepe neque maxime a voluptatem expedita illo, voluptatibus officia necessitatibus possimus ex laboriosam quisquam molestias vel dicta ut aliquid quod alias asperiores dolore rem? Corporis odio dolor sed harum mollitia nulla ipsa labore corrupti eos architecto?
         <br />
         <br />
         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores porro animi voluptas, dignissimos laborum quisquam vero nulla perspiciatis distinctio molestias ullam quidem alias aspernatur magni, nesciunt reprehenderit a natus consequatur.
         <br />
         <br />
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod inventore fuga necessitatibus? Voluptates facilis delectus eos doloremque ipsam, modi qui eligendi assumenda, eum numquam est, error quae officia recusandae natus facere nulla? Ipsum soluta illo, atque minima tempora voluptatum, expedita aliquam accusantium quod vel magnam voluptates! Dignissimos dolore et libero optio asperiores ullam vero fuga fugit odit praesentium distinctio, sequi commodi nemo totam sint obcaecati laboriosam.
        </p>
      </div>
    </div>
  )
}

export default BlogPost