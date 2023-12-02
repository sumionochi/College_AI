'use client'
import { Button } from '@/components/ui/button'
import { ArrowRight, ArrowUpRight, BookText, BotIcon, FolderSearch, Github, Key, LayoutDashboard, Linkedin, Lock, Mail, Pen, ScrollText, Text, Wind } from 'lucide-react'
import { useSession } from 'next-auth/react';
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const {status, data:session} = useSession(); 
  return (
    <div className='flex relative overflow-hidden antialiased min-h-screen flex-col items-center justify-between pt-0'>
        <div className='flex flex-col items-center min-h-screen pt-10 sm:pt-28'>
          <Button className='rounded-3xl bg-black hover:bg-black flex flex-row justify-center items-center pb-2 text-sm text-white outline outline-2 outline-white/30 hover:outline-white/30'>
          ✨ Welcome to a Humane Space, be heard
          </Button>
          <div className='flex text-white p-10 pb-0 mb-10 rounded-md gap-8 flex-col max-w-5xl'>
            <h1 className='text-center font-semibold text-3xl md:text-5xl xl:text-6xl'>
            From Silence To Being Heard. A Platform for Both Authorities and Victims.
            </h1>
            <h2 className='text-center text-xl'>              
            Connecting authorities to victims of abuse, fraud and danger while breaking language barriers with AI.
            </h2>
            {status === 'authenticated' && 
            <div className='mx-auto'>
              <Link href={'/Issues/new'}>
                <Button className='rounded-3xl bg-gradient-to-r from-rose-500 to-amber-400 hover:bg-black flex flex-row justify-center items-center pb-2 text-sm text-white outline outline-2 outline-white/30 hover:outline-white/30'>
                File a Report
                  <ArrowRight className='ml-2 w-5'/>
                </Button>
              </Link>
            </div>}
          </div>
          <section className='grid sm:mx-auto text-white max-w-7xl gap-4 place-items-start sm:place-items-center sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 grid-cols-1'>
              <Button className='rounded-3xl bg-black hover:bg-black flex flex-row justify-center items-center pb-2 text-sm text-white outline outline-2 outline-white/30 hover:outline-white/30'>
                  <Text className='mr-2 w-5'/>
                  Multi-lingual conversation
              </Button>
              <Button className='rounded-3xl bg-black hover:bg-black hover:outline-white/30 flex flex-row justify-center items-center pb-2 text-sm text-white outline outline-2 outline-white/30'>
                <LayoutDashboard className='mr-2 w-5'/>
                Secure and Dynamic Dashboard
              </Button>
              <Button className='rounded-3xl bg-black hover:bg-black hover:outline-white/30 flex flex-row justify-center items-center pb-2 text-sm text-white outline outline-2 outline-white/30'>
                <FolderSearch className='mr-2 w-5'/>
                User Level Auth
              </Button>
              <Button className='rounded-3xl bg-black hover:bg-black hover:outline-white/30 flex flex-row justify-center items-center pb-2 text-sm text-white outline outline-2 outline-white/30'>
                  <Pen className='mr-2 w-5'/>
                  Rich Text Editor
              </Button>
              <Button className='rounded-3xl bg-black hover:bg-black hover:outline-white/30 flex flex-row justify-center items-center pb-2 text-sm text-white outline outline-2 outline-white/30'>
                <ScrollText className='mr-2 w-5'/>
                API gateway To Fetch Data
              </Button>
              <Button className='rounded-3xl bg-black hover:bg-black hover:outline-white/30 flex flex-row justify-center items-center pb-2 text-sm text-white outline outline-2 outline-white/30'>
                  <BotIcon className='mr-2 w-5'/>
                  Vector Chat with Memory
              </Button>
          </section>        
          <div className='flex text-center p-4 pb-28 pt-0 items-center flex-col gap-4'>
            <h1 className='text-white max-w-5xl px-4 text-lg mt-20'>"While First addressing conflicts through discussion is crucial with the involved parties, if the level of abuse intensifies, it becomes imperative to seek assistance from authorities and platforms such as Humane.AI becomes all the more important to ensure one's voice is heard."</h1>
            <img src="https://avatars.githubusercontent.com/u/89721628?v=4" className='w-14 h-14 rounded-full border-2 border-white' />
            <Link href={'https://www.linkedin.com/in/aaditya-srivastava-b4564821b/'}>
            <h2 className='text-white text-md underline underline-offset-2'>Aaditya Srivastava</h2>
            </Link>
          </div>
        </div>
        <div className='flex px-4 pt-1 bg-white/20 text-white justify-between gap-4 flex-row items-center text-primary h-14 absolute bottom-0 w-full'>
        <h2 className='text-white'>© 2023 Humane.AI</h2>
        <div className='flex flex-row gap-4 justify-center items-center'>
          <Link href={'https://github.com/sumionochi'}>
            <Github/>
          </Link>
          <Link href={'https://www.linkedin.com/in/aaditya-srivastava-b4564821b/'}>
            <Linkedin/>
          </Link>
          <Link href={'mailto:aaditya.srivastava.connect@gmail.com'}>
            <Mail/>
          </Link>
          <Link href={'https://sumionochi.github.io/Portfolio-landing-page/'}>
            <ArrowUpRight/>
          </Link>
        </div>
        </div>
    </div>
  )
}
