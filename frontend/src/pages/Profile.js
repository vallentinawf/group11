import React from "react";
import Avatar from '../components/Elements/Avatar';

export default function Profile(){
    return(
        <div className='h-screen w-full bg-white flex flex-col md:flex md:flex-row-reverse  pt-[70px] items-center justify-center '>
            {/*Div for Avatar*/}
            
            <Avatar className=''></Avatar>
            
            <form className='max-w-[500px] bg-white w-full mx-auto my-auto px-10 p-10'>
                <div className='flex flex-col mb-6'>
                    <div className='w-full p-2 pb-0'>
                        <label className='p-2 font-primary font-bold'>Username:</label>
                    </div>
                    <div className="pl-4">
                        <p>kinason</p>
                    </div>
                </div>
                <div className='flex flex-col mb-6'>
                    <div className='w-full p-2 pb-0'>
                        <label className='p-2 font-primary font-bold'>Email:</label>
                    </div>
                    <div className="pl-4">
                        <p>kina@remo.com</p>
                    </div>
                </div>
                <div className='flex flex-col mb-6'>
                    <div className='w-full p-2 pb-0'>
                        <label className='p-2 font-primary font-bold'>Full Name:</label>
                    </div>
                    <div className="pl-4">
                        <p>Kina Anderson</p>
                    </div>
                </div>
                <div className='flex flex-col mb-6'>
                    <div className='w-full p-2 pb-0'>
                        <label className='p-2 font-primary font-bold'>Phone Number:</label>
                    </div>
                    <div className="pl-4">
                        <p>190864456</p>
                    </div>
                </div>
                <div className='flex flex-col mb-6'>
                    <div className='w-full p-2 pb-0'>
                        <label className='p-2 font-primary font-bold'>Address:</label>
                    </div>
                    <div className="pl-4">
                        <p>9 Cambridge Lane Forest Hills, NY 11375</p>
                    </div>
                </div>
                <div className='flex flex-col mb-6'>
                    <div className='w-full p-2 pb-0'>
                        <label className='p-2 font-primary font-bold'>Role:</label>
                    </div>
                    <div className="pl-4">
                        <p>Admin</p>
                    </div>
                </div>
                <div className='flex pl-4'>
                    <button className='border border-lg border-orange w-[50%] my-5 py-2 font-bold text-orange rounded-lg shadow-sm shadow-orange/40 hover:shadow-orange/40 bg-white'>Edit Profile</button>
                </div>
            </form>

            
        </div>
    )
}