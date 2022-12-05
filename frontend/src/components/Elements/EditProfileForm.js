import * as React from 'react';
import Avatar from './Avatar';
// import girlAvatar from '../assets/girlAvatar.png';
// import boyAvatar from '../assets/boyAvatar.png';

export default function EditProfileForm() {
    return(
    <div className='h-screen w-full bg-white flex'>
            <form className='grid grid-cols-1 max-w-[500px] bg-white w-full mx-auto my-auto px-10 p-10  '>
                <div className='md:flex md:items-center mb-6'>
                    <div className='flex justify-between w-full p-2'>
                        <label className='p-2 font-primary'>Username:</label>
                        <input type="text" className='border border-gray border-[2px] w-64 p-2 rounded-lg focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange'></input>
                    </div>
                </div>
                <div className='md:flex md:items-center mb-6'>
                    <div className='flex justify-between w-full p-2'>
                        <label className='p-2 font-primary'>Email:</label>
                        <input type="text" className='border border-gray border-[2px] w-64 p-2 rounded-lg focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange'></input>
                    </div>
                </div>
                <div className='md:flex md:items-center mb-6'>
                    <div className='flex justify-between w-full p-2'>
                        <label className='p-2 font-primary'>Full Name:</label>
                        <input type="text" className='border border-gray border-[2px] w-64 p-2 rounded-lg focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange'></input>
                    </div>
                </div>
                <div className='md:flex md:items-center mb-6'>
                    <div className='flex justify-between w-full p-2'>
                        <label className='p-2 font-primary'>Phone Number:</label>
                        <input type="text" className='border border-gray border-[2px] w-64 p-2 rounded-lg focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange'></input>
                    </div>
                </div>
                <div className='md:flex md:items-center mb-6'>
                    <div className='flex justify-between w-full p-2'>
                        <label className='p-2 font-primary'>Alamat:</label>
                        <input type="text" className='border border-gray border-[2px] border-bold w-64 p-2 rounded-lg focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange'></input>
                    </div>
                </div>
                <div className='md:flex md:items-center mb-6'>
                    <div className='flex justify-between w-full p-2'>
                        <label className='p-2 font-primary'>Role:</label>
                        <input type="text" className='border border-gray border-[2px] w-64 p-2 rounded-lg focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange' value=""disabled></input>
                    </div>
                </div>

                <div className='flex gap-10'>
                    <button className='border-orange w-full my-5 py-2 font-bold text-white rounded-lg shadow-md shadow-orange/60 hover:shadow-orange/40 bg-orange '>Save</button>
                    <button className='border w-full my-5 py-2 font-bold text-orange rounded-lg'>Cancel</button>
                </div>
            </form>

            {/*Div for Avatar*/}
            <Avatar></Avatar>
        </div>
    )
}