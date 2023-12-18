import { RxHamburgerMenu } from "react-icons/rx"

export default function Navbar() {
  return (
    <div className=' bg-slate-100 h-20 flex items-center justify-between border-b border-slate-300'>
      <div className='flex items-center p-4'>
        <RxHamburgerMenu className='font-bold text-xl' />
        <span className='font-bold text-xl px-5'>Project</span>
      </div>
          
    </div>
  )
}
