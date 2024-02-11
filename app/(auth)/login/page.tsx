import { LoginForm } from '@/components/ui/LoginForm'

const Page = () => {
  return (
    <div className='p-20 h-full flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800'>
      <LoginForm type='login' showSocial={true} footerLink='/register' />
    </div>
  )
}

export default Page
