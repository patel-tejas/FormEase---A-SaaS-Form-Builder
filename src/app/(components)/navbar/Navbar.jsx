"use client"

import React from 'react'
import img from "../../../../public/FormEase logo.png"
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from "next/navigation";
import uuid from "react-uuid";

const Navbar = () => {
  const router = useRouter();
    const createForm = () => {
        const id = uuid();
        router.push(`/create-form/${id}`);
    };
  return (
    <div className='flex justify-between border-black border-b pb-5 items-center'>
      <div className='relative h-12 w-20'>
        <Link href={"/"}>
          <Image src={img} fill className='absolute' />
        </Link>
      </div>
      
      <div className='flex gap-8 items-center'>
        <Link href="/about" className='hover:text-pink-600 duration-200'>About Us</Link>
        <button onClick={createForm} className="inline-block rounded w-max bg-pink-600 px-7 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400">Create form</button>

      </div>
    </div>
  )
}

export default Navbar