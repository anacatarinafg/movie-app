import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <footer className='footer'>
        <Image src="/../public/android-chrome-192x192.png" alt='ana-catarina-logo' width={30} height={30} className='footer__image'></Image>
    </footer>
  )
}

export default Footer