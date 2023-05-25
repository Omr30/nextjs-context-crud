'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export const Navbar = () => {
  const router = useRouter()

  return (
    <header>
      <Link href="/">
        <h1>Task App</h1>
      </Link>

      <div>
        <button onClick={() => router.push('/new')}>Add Task</button>
      </div>
    </header>
  )
}
