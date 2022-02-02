import {
  LoginForm,
  RegisterForm,
} from '@components/authentication/Authentication'
import React, { useState } from 'react'

export default function Auth() {
  const [tab, setTab] = useState(1)
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <div className="flex w-full flex-row">
        <div className="flex-1 py-12">
          <div className="mx-auto flex max-w-sm overflow-hidden rounded-lg bg-white shadow-2xl lg:max-w-4xl">
            <div className="w-full p-8 lg:w-1/2">
              <ul className="flex w-full justify-between">
                <li className="text-blue-400" onClick={() => setTab(1)}>
                  login
                </li>
                <li className="text-blue-400" onClick={() => setTab(2)}>
                  register
                </li>
              </ul>
              <div className={`${tab == 1 ? 'block' : 'hidden'}`}>
                <Login />
              </div>
              <div className={`${tab == 2 ? 'block' : 'hidden'}`}>
                <Register />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Login() {
  return (
    <div>
      <div className="mt-4 flex items-center justify-between">
        <span className="w-1/5 border-b border-red-700 lg:w-1/4"></span>
        <a href="#" className="text-center text-xs uppercase text-gray-500">
          Login
        </a>
        <span className="w-1/5 border-b border-red-700 lg:w-1/4"></span>
      </div>
      <div>
        <LoginForm />
      </div>
    </div>
  )
}
function Register() {
  return (
    <div>
      <div className="mt-4 flex items-center justify-between">
        <span className="w-1/5 border-b border-red-700 lg:w-1/4"></span>
        <a href="#" className="text-center text-xs uppercase text-gray-500">
          Register
        </a>
        <span className="w-1/5 border-b border-red-700 lg:w-1/4"></span>
      </div>
      <div>
        <RegisterForm />
      </div>
    </div>
  )
}
