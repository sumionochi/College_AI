import React from 'react'
import Logo from './Logo'
import Link from 'next/link'

type Props = {}

const Navbar = (props: Props) => {
  const links = [{label:'Dashboard', href:'/'},{label:'Issues', href:'/issues'}]
  return (
    <header className='sticky top-0 z-50 backdrop-blur-sm mx-auto'>
      <nav className='flex max-w-7xl gap-2 flex-col sm:flex-row items-center p-5 pl-2 bg-none mx-auto'>
        <Logo/>
        <div className='flex-1 flex items-center justify-end space-x-4' >
          <div className='rounded-3xl gap-2 flex-row sm:flex-row sm:gap-4 px-8 py-4 bg-black hover:bg-black flex justify-center items-center text-sm text-white outline outline-2 outline-white/30 hover:outline-white/30'>
            {links.map(link=><Link key={link.href} className='' href={link.href}>{link.label}</Link>)}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar