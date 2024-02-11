'use client'
import { LoginSchema } from '@/schemas/LoginSchema'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from './button'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import Link from 'next/link'
import addUser from '@/api/actions/addUser'

export const LoginForm = ({
  showSocial,
  footerLink,
  type,
}: {
  showSocial: boolean
  footerLink: string
  type: string
}) => {
  const { register, handleSubmit, formState, reset } = useForm<
    z.infer<typeof LoginSchema>
  >({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const { errors } = formState
  const formSubmit = async (data: z.infer<typeof LoginSchema>) => {
    console.log(data)
    const response = await addUser(data)
    console.log('response is ', response)
  }
  return (
    <Card className='w-3/4 max-w-xl text-center'>
      <CardHeader>
        <CardTitle>Welcome!</CardTitle>
        <CardDescription className='text-md pt-2'>
          {type === 'login' ? 'Login Form' : 'Registration Form'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className='flex flex-col space-y-6'>
            <div className='flex flex-col'>
              <input
                type='email'
                placeholder='Enter email'
                {...register('email')}
                className='bg-blue-200 text-md text-black placeholder:text-md placeholder:text-center placeholder:text-slate-500 rounded-md border border-blue-100 px-5 py-2 focus:outline-none'
              />
              <p className='text-red-900 text-sm'>{errors.email?.message}</p>
            </div>
            <div className='flex flex-col'>
              <input
                type='password'
                placeholder='Enter password'
                {...register('password')}
                className='bg-blue-200 text-md text-black placeholder:text-md placeholder:text-center placeholder:text-slate-500 rounded-md border border-blue-100 px-5 py-2 focus:outline-none'
              />
              <p className='text-red-900 text-sm'>{errors.password?.message}</p>
            </div>
            <Button className='text-md py-4 bg-blue-800'>Login</Button>
          </div>
        </form>

        {showSocial && (
          <div className='flex items-center w-full gap-x-2 mt-6'>
            <Button
              size='lg'
              className='w-full'
              variant='outline'
              onClick={() => {}}
            >
              <FcGoogle className='h-5 w-5' />
            </Button>
            <Button
              size='lg'
              className='w-full'
              variant='outline'
              onClick={() => {}}
            >
              <FaGithub className='h-5 w-5' />
            </Button>
          </div>
        )}
      </CardContent>
      <CardFooter className='flex items-center justify-center'>
        <p className='text-sm'>
          {type === 'login'
            ? 'New user? Register '
            : 'Already registered? Login '}
          <Link
            href={footerLink}
            className='hover:text-slate-500 hover:underline'
          >
            here
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}
