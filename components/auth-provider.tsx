"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { useRouter, usePathname } from "next/navigation"
import { jwtDecode } from "jwt-decode"


type User = {
  firstname: string
  lastname: string
  middlename: string
  email: string
  mobile: string
  role: {
    id: string
  }
}

type DecodedToken = {
  data: User
}
type LoginCredentials = {
  identifier: string
  password: string
}

type LoginResponse = {
  token: string
  message?: string
}

type AuthContextType = {
  user: User | null
  isLoading: boolean
  isLoginLoading: boolean
  loginError: string | null
  login: (credentials: LoginCredentials) => Promise<void>
  loginWithData: (userData: User) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isLoginLoading, setIsLoginLoading] = useState(false)
  const [loginError, setLoginError] = useState<string | null>(null)
  const router = useRouter()
  const pathname = usePathname()
  
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || ""

  useEffect(() => {
    // Check if token exists in localStorage and set user from it
    const token = localStorage.getItem("token")
    if (token) {
      try {
        const decodedToken = jwtDecode<DecodedToken>(token)
        setUser(decodedToken.data)
      } catch (error) {
        console.error("Failed to decode token:", error)
        localStorage.removeItem("token")
      }
    }
    setIsLoading(false)
  }, [])

  // Protect dashboard routes
  useEffect(() => {
    if (!isLoading) {
      if (pathname?.startsWith("/dashboard") && !user) {
        router.push("/login")
      }
    }
  }, [isLoading, user, pathname, router])

  const login = async (credentials: LoginCredentials) => {
    setIsLoginLoading(true)
    setLoginError(null)
    
    try {
      const response = await fetch(`${apiUrl}/v1/auth/validatePassword`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      })
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.message || "Login failed")
      }
      
      const data: LoginResponse = await response.json()
      
      if (!data.token) {
        throw new Error("Invalid response from server")
      }
      
      // Store token in localStorage
      localStorage.setItem("token", data.token)
      
      // Decode token to get user data
      const decodedToken = jwtDecode<DecodedToken>(data.token)
      console.log("decodedToken", decodedToken)
      
      // Set user state only
      setUser(decodedToken.data)
      
      // Redirect to dashboard
      router.push("/dashboard")
      
    } catch (error) {
      console.error("Login error:", error)
      setLoginError(error instanceof Error ? error.message : "An unknown error occurred")
      throw error
    } finally {
      setIsLoginLoading(false)
    }
  }

  const loginWithData = (userData: User) => {
    setUser(userData)
    // We don't store user in localStorage anymore
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("token")
    router.push("/")
  }

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        isLoading, 
        isLoginLoading, 
        loginError, 
        login, 
        loginWithData, 
        logout 
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
