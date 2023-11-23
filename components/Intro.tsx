"use client"
import React from 'react'
import Image from 'next/image'
import profilePic from '@/public/pfp.jpg'
import { motion } from "framer-motion"
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { FaGithubSquare } from 'react-icons/fa'

export default function Intro() {
    return (
        <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
            <div className='flex items-center justify-center'>
                <div className='relative'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2
                        }}
                    >
                        <Image src={profilePic} alt="Vladyslav's profile image" quality='95' priority={true} className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl' />
                    </motion.div>
                    <motion.span
                        className='absolute bottom-0 right-0 text-4xl'
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: 'spring',
                            stiffness: 125,
                            delay: 0.5,
                            duration: 0.7
                        }}
                    >👋</motion.span>
                </div>
            </div>
            <motion.p
                className='mb-10 mt-4 px-1 text-2xl font-medium !leading-[1.5] sm:text-4xl'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className='font-bold'>{`Hello, I'm Vladyslav. `}</span>
                I am a <span className='font-bold'>frontend developer</span>.
                I enjoy building modern looking <span className='italic'>sites & apps</span>. My main focus is <span className='underline'>React (Next.js)</span>
            </motion.p>
            <motion.div
                className='flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1
                }}
            >
                <Link href="#contact" className='group cursor-pointer flex items-center bg-gray-900 text-white px-7 py-3 rounded-full gap-2 outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all'>Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition-all" />
                </Link>


                <a href='/CV.pdf' download className='group cursor-pointer border border-black/10 flex items-center bg-white px-7 py-3 rounded-full gap-2 outline-none focus:scale-110 hover:scale-110 active:scale-105 transition-all'>Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition-all" /> </a>

                {/* LinkedIn link */}
                <a href='https://www.linkedin.com/in/kod3cz/' target='_blank' className='group cursor-pointer border border-black/10 flex items-center bg-white text-gray-700 p-4 rounded-full gap-2 outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition-all'>
                    <BsLinkedin className="group-hover:scale-110 transition-all" />
                </a>

                {/* Github linnk */}
                <a href='https://github.com/w14d3k' target='_blank' className='group cursor-pointer border border-black/10 flex items-center bg-white text-gray-700 p-4 rounded-full gap-2 text-[1.35rem] outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition-all'>
                    <FaGithubSquare className="group-hover:scale-110 transition-all" />
                </a>

            </motion.div>
        </section>
    )
}
