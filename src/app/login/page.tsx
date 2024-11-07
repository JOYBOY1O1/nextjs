'use client'

import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import React, { useState } from "react"
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import axios from 'axios'

export default function LoginPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  const onLogin = async () => {
    // Implement your login logic here
    console.log("Logging in:", user)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-l from-[#243B55] to-[#141E30]">
      <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
          <CardDescription className="text-center">Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={user.email}
              onChange={(e) => setUser({...user, email: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={user.password}
              onChange={(e) => setUser({...user, password: e.target.value})}
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button onClick={onLogin} className="w-full">
            <Mail className="mr-2 h-4 w-4" /> Login with Email
          </Button>
          <div className="text-center text-sm">
            Don't have an account?{" "}
            <Link href="/signup" className="text-primary hover:underline">
              Sign up here
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}