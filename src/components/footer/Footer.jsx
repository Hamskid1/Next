import React from 'react'
import style from './footer.module.css'
import Image from 'next/image'

function Footer() {
  return (
    <div  className={style.container}>
      <div>
        ©2024 Lamamia. All rights reseverd.
      </div>
      <div className={style.social}>
        {/* <div className={style.ImageContainer}>
        <Image src="/1.png" fill={true} alt="Lama Dev" />
        </div> */}
        <Image src="/1.png"  width={15} height={15} className={style.icon} alt="Lama Dev Facebook Account" />
        <Image src="/2.png"  width={15} height={15} className={style.icon} alt="Lama Dev" />
        <Image src="/3.png"  width={15} height={15} className={style.icon} alt="Lama Dev" />
        <Image src="/4.png"  width={15} height={15} className={style.icon} alt="Lama Dev" />
      </div>
    </div>
  )
}

export default Footer