import * as React from 'react';
import loginImg from '../assets/login.jpeg';
import Logo from '../assets/logo.png';

export default function Login() {
    return(
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full bg-gray'>
        <div className='bg-gray flex flex-col justify-center'>
            <form className='max-w-[500px] bg-gray w-full mx-auto px-10 p-10'>
                <div className='grid justify-items-center'>
                    <img className='object-scale-down w-6/12' src={Logo} alt='Logo'></img>
                </div>
                <p className='text-center font-bold p-2 text-black/75'>Login into your account</p>
                <div className='flex flex-col py-2 px-5'>
                    <label className='text-black/50'>Email address</label>
                    <input className='p-2 w-full rounded-lg' type="text"></input>
                </div>
                <div className='flex flex-col py-2 px-5'>
                    <label className='text-black/50'>Password</label>
                    <input className='p-2 w-full rounded-lg' type="password"></input>
                </div>
                <div className='text-center'>
                    <button className='text-blue hover:text-darkblue underline'>Forgot password?</button>
                </div>
                <div className='px-5'>
                    <button className='w-full my-5 py-2 bg-orange text-white font-bold rounded-lg shadow-md shadow-orange/60 hover:shadow-orange/40 '>Login now</button>
                </div>
                <div className='text-center text-black/25'>
                    OR
                </div>
                <div className='px-5'>
                    <button className='border w-full my-5 py-2 font-bold text-orange rounded-lg'>Signup now</button>
                </div>
            </form>
        </div>

        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={loginImg} alt="" />
        </div>
    </div>
    )
}