'use client'
import { signOut, useSession } from 'next-auth/react'
import React from 'react'

function LogoutButton() {
    const session = useSession();
  return (
    <button 
        className='px-2 py-1 bg-blue-600 text-white rounded'
        onClick={()=>signOut()}
    >
        Log out
    </button>
  )
}

export default LogoutButton;