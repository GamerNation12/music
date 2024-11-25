'use client'

import { ChevronLeft, ChevronRight, Bell, User, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from 'next/navigation'
import { useAuth } from './auth-provider'
import { FormEvent } from 'react'

export default function Header() {
  const router = useRouter()
  const { user, logout } = useAuth()

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const query = formData.get('query')
    if (query) {
      router.push(`/search?q=${encodeURIComponent(query.toString())}`)
    }
  }

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-10 flex items-center justify-between p-4">
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" onClick={() => router.back()}>
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Go back</span>
        </Button>
        <Button variant="ghost" size="icon" onClick={() => router.forward()}>
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Go forward</span>
        </Button>
        <form onSubmit={handleSearch} className="relative">
          <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="pl-8 w-[300px]"
            name="query"
          />
        </form>
      </div>
      <div className="flex items-center space-x-4">
        {user ? (
          <>
            <Button variant="ghost" size="icon" onClick={() => router.push('/profile')}>
              <User className="h-4 w-4" />
              <span className="sr-only">User profile</span>
            </Button>
            {user.isAdmin && (
              <Button variant="outline" onClick={() => router.push('/admin')}>
                Admin Panel
              </Button>
            )}
            <Button variant="outline" onClick={logout}>Logout</Button>
          </>
        ) : (
          <>
            <Button variant="outline" onClick={() => router.push('/login')}>Login</Button>
            <Button variant="outline" onClick={() => router.push('/signup')}>Sign Up</Button>
          </>
        )}
      </div>
    </header>
  )
}

