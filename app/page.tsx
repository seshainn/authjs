import { Button } from '@/components/ui/button'
import { Ubuntu } from 'next/font/google'
import Link from 'next/link'

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
})

export default function Home() {
  return (
    <div className='flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800'>
      <div className='space-y-6 text-center'>
        <h1
          className={`${ubuntu.className} text-6xl font-semibold text-white drop-shadow-md`}
        >
          🔐Auth
        </h1>
        <p className='text-white text-lg'>
          Authentication and Authorization service
        </p>
        <Button size='lg'>
          <Link href='/login'>Signin</Link>
        </Button>
      </div>
    </div>
  )
}
