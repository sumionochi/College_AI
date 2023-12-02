'use client'
import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Themetoggle } from './ui/Themetoggle'
import {useSession} from 'next-auth/react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { User } from 'lucide-react'
import AIChatButton from './AIChatButton'

type Props = {}

const Navbar = (props: Props) => {
  const links = [{label:'Report', href:'/Issues/new'},{label:'Dashboard', href:'/Issues'}]
  
  /*to highlight the opened page*/
  const currPath = usePathname();
  const {status, data:session} = useSession(); 

  return (
    <header className='sticky top-0 z-50 backdrop-blur-sm mx-auto'>
      <nav className='flex max-w-7xl gap-2 flex-col sm:flex-row items-center p-5 pl-2 bg-none mx-auto'>
        <Logo/>
        <div className='flex-1 flex items-center justify-end space-x-4' >
          {status === 'authenticated' && (   
          <div className={'rounded-3xl gap-2 flex-row sm:flex-row sm:gap-4 px-8 py-4 bg-black/50 hover:bg-black/70 flex justify-center items-center text-sm text-white outline outline-2 outline-white/30 hover:outline-white/30'}>
            {links.map(link=><Link key={link.href} className={`${link.href === currPath ? 'font-semibold' : 'font-base'} hover:text-white/50 transition-all`} href={link.href}>{link.label}</Link>)}
            <DropdownMenu >
              <DropdownMenuTrigger>
                      <Avatar>
                        <AvatarImage referrerPolicy='no-referrer' src={session.user!.image!}/>
                        <AvatarFallback><User className='bg-black rounded-full'/></AvatarFallback>
                      </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end' className='rounded-lg shadow-md p-2 bg-secondary border border-gray-300'>
                <DropdownMenuItem>
                  {session.user?.name && (<p className=' font-medium text-primary'>{session.user.name}</p>)}
                </DropdownMenuItem>
                <DropdownMenuItem>
                  {session.user?.email && (<p className='font-medium text-primary'>{session.user.email}</p>)}
                </DropdownMenuItem>
                  <Link href={'/dashboard'}><Button className='p-2 hover:bg-transparent bg-transparent text-green-700'>Share</Button></Link>
                  <Link href={'/api/auth/signout'}><Button className='p-2 hover:bg-transparent bg-transparent text-red-500'>Log Out</Button></Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          )}
          {status === 'unauthenticated' && (
          <div className={'rounded-3xl gap-2 flex-row sm:flex-row sm:gap-4 px-8 py-4 bg-black/50 hover:bg-black/70 flex justify-center items-center text-sm text-white outline outline-2 outline-white/30 hover:outline-white/30'}>
          <Link href={'/api/auth/signin'}>Log In / Sign Up</Link>
          </div>
          
          )}
          <Themetoggle/>
        </div>
      </nav>
    </header>
  )
}

export default Navbar