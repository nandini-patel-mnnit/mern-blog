import { Label, TextInput, Button } from 'flowbite-react';
import React from 'react'
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        <div className='flex-1'>
          <Link to="/" className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 rounded-lg text-white'>Sahand's</span>
            Blog
          </Link>
          <p className='text-sm mt-5'>
            This is a mern stack full fledged blog web application with cutting edge features. Here you can read articles on various topics of your interest related to web development. You can sign up with your email-id and password or with google.
          </p>
        </div>
        <div className='flex-1'>
          <form className='flex flex-col gap-4'>
            <div>
              <Label value='Username' />
              <TextInput type='text' placeholder='Username' id='username' />
            </div>
            <div>
              <Label value='E-mail' />
              <TextInput type='text' placeholder='name@company.com' id='email' />
            </div>
            <div>
              <Label value='Password' />
              <TextInput type='text' placeholder='Password' id='password' />
            </div>
            <Button gradientDuoTone='purpleToBlue' type='submit' >
              Sign Up
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>
              Have an account?
            </span>
            <Link to='/sign-in' className='text-blue-500'>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
