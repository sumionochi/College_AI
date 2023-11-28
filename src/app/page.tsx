import { Button } from '@/components/ui/button'
import { ArrowRight, ArrowUpRight, BookText, BotIcon, Github, Key, Linkedin, Lock, Mail, ScrollText, Text } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const session = true;
  return (
    <div className='flex relative overflow-hidden antialiased min-h-screen flex-col items-center justify-between pt-0'>
        <div className='flex flex-col items-center min-h-screen pt-10 sm:pt-28'>
          <div className='flex text-white p-10 pb-0 mb-10 rounded-md gap-8 flex-col max-w-5xl'>
            <h1 className='text-center font-semibold text-3xl md:text-5xl xl:text-6xl'>
              Remote Health Consultation from Anywhere!
            </h1>
            <h2 className='text-center text-xl'>              
              Access timely medical assistance seamlessly. Get right level of <span className='text-pink-900 dark:text-purple-300'>medical expertise with the insights of AI.</span>
            </h2>
            
          </div>
          <div className='pt-10 grid mx-auto text-white max-w-7xl gap-4 place-items-center px-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 grid-cols-1'>
          {/* <Button className='p-6 shadow-md shadow-black bg-gradient-to-r from-rose-500 to-blue-500 border text-white rounded-md border-none'>
            <Book className='mr-2'/>
            AI Generated Courses
          </Button> */}
          {/* <Button className='p-6 shadow-md shadow-black bg-gradient-to-r from-teal-500 to-black border text-white rounded-md border-none'>
            <ScrollText className='mr-2'/>
            Adaptive Quizzes
          </Button> */}
          <Button className='rounded-3xl bg-black hover:bg-black flex flex-row justify-center items-center pb-2 text-sm text-white outline outline-2 outline-white/30 hover:outline-white/30'>
            <Text className='mr-2 w-5'/>
            Multi Lingual Translation
          </Button>
          <Button className='rounded-3xl bg-black hover:bg-black flex flex-row justify-center items-center pb-2 text-sm text-white outline outline-2 outline-white/30 hover:outline-white/30'>
            <Lock className='mr-2 w-5'/>
            Secure Chatroom Authentication
          </Button>
          <Button className='rounded-3xl bg-black hover:bg-black flex flex-row justify-center items-center pb-2 text-sm text-white outline outline-2 outline-white/30 hover:outline-white/30'>
            <Key className='mr-2 w-5'/>
            User Access Levels
          </Button>
          <Button className='rounded-3xl bg-black hover:bg-black flex flex-row justify-center items-center pb-2 text-sm text-white outline outline-2 outline-white/30 hover:outline-white/30'>
            <ScrollText className='mr-2 w-5'/>
            AI Summarization
          </Button>
          <Button className='rounded-3xl bg-black hover:bg-black flex flex-row justify-center items-center pb-2 text-sm text-white outline outline-2 outline-white/30 hover:outline-white/30'>
            <BookText className='mr-2 w-5'/>
            Smart Diary
          </Button>
          <Button className='rounded-3xl bg-black hover:bg-black flex flex-row justify-center items-center pb-2 text-sm text-white outline outline-2 outline-white/30 hover:outline-white/30'>
            <BotIcon className='mr-2 w-5'/>
            Virtual Physician with memory
          </Button>
          </div>         
          <div className='flex text-center p-4 pb-28 pt-0 items-center flex-col gap-4'>
            <h1 className='text-white px-4 text-xl mt-20'>“Love how the app is so secure, personalized and transparent. Made healthcare more accessible.”</h1>
            <img src="https://avatars.githubusercontent.com/u/89721628?v=4" className='w-14 h-14 rounded-full border-2 border-white' />
            <Link href={'https://www.linkedin.com/in/aaditya-srivastava-b4564821b/'}>
            <h2 className='text-white text-md underline underline-offset-2'>Aaditya Srivastava</h2>
            </Link>
          </div>
        </div>
        <div className='flex px-4 pt-1 bg-white/20 text-white justify-between gap-4 flex-row items-center text-primary h-14 absolute bottom-0 w-full'>
        <h2 className='text-white'>© 2023 Context.AI</h2>
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
