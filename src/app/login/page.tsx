// pages/login.tsx
import { SignIn } from '@clerk/nextjs'

export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignIn />
    </div>
  )
}
