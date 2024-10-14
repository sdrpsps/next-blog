'use server'

import db from '@/lib/db'
import { Prisma } from '@prisma/client'
import { z } from 'zod'

const CreateSubscriberSchema = z.object({
  email: z.string().min(1, { message: 'Email is required' }).email({ message: 'Invalid email address' }),
})

interface CreateSubscribe {
  message: string
  success: boolean
}

export async function createSubscriber(_prevState: CreateSubscribe, formData: FormData) {
  const validatedFields = CreateSubscriberSchema.safeParse({
    email: formData.get('email'),
  })

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.issues[0].message,
      success: false,
    }
  }

  const { email } = validatedFields.data

  try {
    await db.subscriber.create({
      data: { email },
    })

    return {
      message: 'Thank you for subscribing.',
      success: true,
    }
  }
  catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
      return {
        message: 'This email is already subscribed.',
        success: false,
      }
    }

    return {
      message: 'Something went wrong. Please try again later.',
      success: false,
    }
  }
}
