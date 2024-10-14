'use client'

import { createSubscriber } from '@/actions/subscribe'
import { useFormState, useFormStatus } from 'react-dom'
import { Button } from './ui/button'
import { Input } from './ui/input'

export function SubscribeForm() {
  const { pending } = useFormStatus()
  const [state, formAction] = useFormState(createSubscriber, {
    success: false,
    message: '',
  })

  return (
    <form action={formAction} className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          required
          aria-required="true"
          aria-invalid={!state.success && !!state.message}
        />
        <Button type="submit" disabled={pending} aria-disabled={pending} aria-busy={pending}>
          {pending ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </div>
      {state.message && (
        <p
          className={`text-xs ${state.success ? 'text-green-500' : 'text-red-500'}`}
          role="status"
          aria-live="polite"
        >
          {state.message}
        </p>
      )}
    </form>
  )
}
