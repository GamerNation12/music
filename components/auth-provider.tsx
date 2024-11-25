'use client'

import { createContext, useContext, useState, useEffect } from 'react'

type User = {
  id: string
  name: string
  email: string
  isAdmin: boolean
} | null

type AuthContextType = {
  user: User
  login: (email: string, password: string) => Promise<void>
  signup: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null)

  useEffect(() => {
    // Check if user is logged in (e.g., by checking localStorage)
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const login = async (email: string, password: string) => {
    // This is a mock login. In a real app, you'd call an API here.
    if (email === 'user@example.com' && password === 'password') {
      const user = { id: '1', name: 'User', email, isAdmin: false }
      setUser(user)
      localStorage.setItem('user', JSON.stringify(user))
    } else if (email === 'admin@example.com' && password === 'adminpassword') {
      const user = { id: '2', name: 'Admin', email, isAdmin: true }
      setUser(user)
      localStorage.setItem('user', JSON.stringify(user))
    } else {
      throw new Error('Invalid credentials')
    }
  }

  const signup = async (name: string, email: string, password: string) => {
    // This is a mock signup. In a real app, you'd call an API here.
    const user = { id: Date.now().toString(), name, email, isAdmin: false }
    setUser(user)
    localStorage.setItem('user', JSON.stringify(user))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

