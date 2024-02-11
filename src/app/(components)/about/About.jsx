import React from 'react'
import Createbtn from '../createFormBtn/Createbtn'

const About = () => {
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                    <h2 class="text-xs text-pink-500 tracking-widest font-medium title-font mb-1">Form SaaS</h2>
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Fill form once, And we Save it up for you !</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Join us on a journey where interactions become effortless. We're committed to crafting an experience that is both streamlined and memorable.</p>
                </div>
                <div class="flex flex-wrap">
                    <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                        <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">"Swift Registration Delight"</h2>
                        <p class="leading-relaxed text-base mb-4">Experience swift registrations with a simple click, ensuring a delightful and efficient sign-up process for all users.</p>
                        
                    </div>
                    <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                        <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Smart Auto-Fill</h2>
                        <p class="leading-relaxed text-base mb-4">Say goodbye to tedious form entries – our platform intuitively remembers your details, making every registration a breeze.</p>
                        
                    </div>
                    <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                        <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Global Connectivity, Personalized Approach</h2>
                        <p class="leading-relaxed text-base mb-4">Connect globally with our distributed infrastructure while maintaining a personalized touch for each user, ensuring a unique experience.</p>
                        
                    </div>
                    <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                        <h2 class="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Data Fort Knox</h2>
                        <p class="leading-relaxed text-base mb-4">Rest easy with our top-notch security measures, featuring encryption and authentication, creating an impregnable fortress for user data.</p>
                    </div>
                </div>
                <Createbtn />
            </div>
        </section>
    )
}

export default About