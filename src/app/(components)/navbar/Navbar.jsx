import React from 'react'
import img from "../../../../public/FormEase logo.png"
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='flex justify-between border-black border-b pb-5 items-center'>
        <div className='relative h-12 w-20'>
          <Link href={"/"}>
            <Image src={img} fill className='absolute'/>
          </Link>
        </div>
        
    </div>
  )
}

export default Navbar