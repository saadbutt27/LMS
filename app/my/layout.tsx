'use client'
// import './globals.css'
import { Inter } from 'next/font/google'
// import Navbar from '@/components/Navbar'
import Providers from '@/components/Providers'
// import { Context } from '@/lib/context'
// import { useSession } from 'next-auth/react'
import Navigation from './components/Navigation'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Student',
  description: 'Generated by create next app',
}

export default function MyLayout({
  children,
}: {
  children: React.ReactNode
}) {

  

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Providers> */}
        {/* <Context.Provider value={session?.user}> */}
          {/* <Navbar/> */}

          <Navigation/>
          {children}
          
      {/* </Context.Provider> */}
        {/* </Providers> */}
      </body>
    </html>
  )
}
