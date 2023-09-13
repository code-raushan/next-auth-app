'use client'
import { signIn, useSession } from 'next-auth/react'
import React from 'react'

function LoginButton() {
    const session = useSession();
  return (
    <button 
        className='px-2 py-1 bg-blue-600 text-white rounded'
        onClick={()=>signIn()}
    >
        Login 
    </button>
  )
}

export default LoginButton;