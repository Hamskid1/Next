import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Button/button'

const Category = ({ params }) => {
  console.log(params)
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.contents}>
          <h1 className={styles.title}>title</h1>
          <p className={styles.desc}>desc</p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Category