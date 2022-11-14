import * as React from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../assets/loginImg.jpg';
import Logo from '../assets/logo.png';


export default function Login() {
    return(
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full bg-gray'>
        <div className='bg-gray flex flex-col justify-center'>
            
            {/* start - Login Form */}
            <form className='max-w-[500px] bg-gray w-full mx-auto px-10 p-10'>

                <div className='grid justify-items-center'>
                    <img className='object-scale-down w-6/12' src={Logo} alt='Logo'></img>
                </div>
                <p className='text-center font-bold p-2 text-black/75'>Login into your account</p>

                {/* div for Email Address Input */}
                <div className='flex flex-col py-2 px-5'>
                    <label className='text-black/50'>Email address</label>
                    <input className='p-2 w-full rounded-lg placeholder-black/25 focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange' type="text" placeholder='alex@email.com'></input>
                </div>

                {/* div for Password Input */}
                <div className='flex flex-col py-2 px-5'>
                    <label className='text-black/50'>Password</label>
                    <input className='p-2 w-full rounded-lg placeholder-black/25 focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange' type="password" placeholder='••••••••'></input>
                </div>

                <div className='text-center'>
                    <button className='text-blue hover:text-darkblue underline'>Forgot password?</button>
                </div>

                {/* div for Button Login */}
                <div className='px-5'>
                    <button className='w-full my-5 py-2 bg-orange text-white font-bold rounded-lg shadow-md shadow-orange/60 hover:shadow-orange/40 '>Login now</button>
                </div>

                <div className="grid justify-items-center">
                    <hr className="my-5 w-10/12 h-px bg-transparent border-0 dark:bg-black/25"></hr>
                    <span className="absolute my-2.5 px-3 text-sm text-black/25 bg-gray">OR</span>
                </div>

                {/* div for Button Signup */}
                <div className='px-5'>
                    <Link to='/register'>
                        <button className='border w-full my-5 py-2 font-bold text-orange rounded-lg'>Signup now</button>
                    </Link>
                </div>

            </form>
            {/* end - Login Form */}
        </div>

        {/* div for login image beside the form */}
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={loginImg} alt="suzuki motorcycle" />
        </div>

    </div>
    )
}