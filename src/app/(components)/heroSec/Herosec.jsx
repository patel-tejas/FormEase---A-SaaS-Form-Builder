import React from 'react'
import img from "../../../../public/hero1.svg"
import Image from 'next/image'
import { useRouter } from "next/navigation";
import uuid from "react-uuid";

const Herosec = () => {
    const router = useRouter();
    const createForm = () => {
        const id = uuid();
        router.push(`/create-form/${id}`);
    };
    return (
        <section class="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
            <div class="p-8 md:p-12 lg:px-16 lg:py-24">
                <div class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                    <h2 class="text-2xl font-bold text-gray-900 md:text-3xl">
                        Revolutionize Your Experience: Seamless Registrations with Our Cutting-Edge SaaS Platform!
                    </h2>

                    <p class="hidden text-gray-500 md:mt-4 md:block">
                        Experience Effortless Event Enrollment: Your Gateway to Smooth, Secure, and Simplified Registrations Through Our Advanced SaaS Platform!
                    </p>

                    <div class="mt-4 md:mt-8">
                     
                            <button onClick={createForm} className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400">Create form</button>
                     
                    </div>
                </div>
            </div>

            <Image
                alt=""
                src={img}
                class="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
            />
        </section>
    )
}

export default Herosec