import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vlad Artemenko | Personal Portfolio',
  description: "Vladyslav Artemenko — Frontend web-developer",
  authors: [{ name: "Vladyslav Artemenko", url: "https://wladek.xyz" }],
  creator: "Vladyslav Artemenko",
  keywords: ['cv', 'portfolio', 'react', 'js', 'next-js', 'web-developer', 'frontend']
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'bg-gray-50 text-gray-950 h-[1500px]')}>
        {/* Background blured dots for ambient colors */}
        {/* Pink */}
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        {/* Blue */}
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <Header />
        {children}
      </body>
    </html>
  )
}
