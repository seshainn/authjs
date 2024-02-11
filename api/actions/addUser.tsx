'use server'

import { LoginSchema } from '@/schemas/LoginSchema'
import * as z from 'zod'

const addUser = async (values: z.infer<typeof LoginSchema>) => {
  const userData = LoginSchema.safeParse(values)

  if (userData.success) {
    console.log(userData)
    return { success: true, message: 'User details received by server' }
  }
  if (userData.error) {
    return { success: false, error: userData.error.format() }
  }
}
export default addUser
