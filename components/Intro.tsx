"use client"
import React from 'react'
import Image from 'next/image'
import profilePic from '@/public/pfp.jpg'
import { motion } from "framer-motion"
export default function Intro() {
    return (
        <section>
            <div className='flex items-center justify-center'>
                <div className='relative'>
                    <motion.div>
                        <Image src={profilePic} alt="Vladyslav's profile image" quality='95' priority={true} className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl' />
                    </motion.div>
                    <span className='absolute bottom-0 right-0 text-4xl'>👋</span>
                </div>
            </div>
        </section>
    )
}
