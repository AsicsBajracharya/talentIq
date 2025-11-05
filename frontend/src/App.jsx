import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SignInButton, SignOutButton, UserButton, SignedIn, SignedOut } from '@clerk/clerk-react'

function App() {

  return (
    <>
      <h1>Welcome to the app</h1>
      <SignedOut>
      <SignInButton mode='modal' >
        <button>Login</button>
      </SignInButton>
      </SignedOut>
      <SignedIn>
      <SignOutButton />
      </SignedIn>
      <UserButton />
    </>
  )
}

export default App
