"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import uuid from 'react-uuid';

const Createbtn = () => {
    const router = useRouter();
    const createForm = () => {
        const id = uuid();
        router.push(`/create-form/${id}`);
    };
    return (
        <button onClick={createForm} className="flex mx-auto mt-16 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">Create your own form !</button>
    )
}

export default Createbtn