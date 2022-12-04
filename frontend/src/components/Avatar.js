import React from "react";
import { useState } from "react";
import girlAvatar from '../assets/girlAvatar.png';
import boyAvatar from '../assets/boyAvatar.png';
import ModalSuccess from "./ModalSuccess";

export default function Avatar (){
    const [changed, setChanged] = useState(false)

    const changeAvatar = () => {
        if(changed){
            document.getElementById('avatarImg').src=girlAvatar
            setChanged(false)
        }
        else{
            document.getElementById('avatarImg').src=boyAvatar
        }
    }

    return (
        <div className='flex flex-col justify-center items-center w-[50%]'>
            <div className=''>
                <img id ='avatarImg' src={boyAvatar} alt='avatar' className='w-[360px] h-[360px] rounded-full'></img>
            </div>
            <div>
                <button className='p-6 border-orange w-full my-5 py-2 font-bold text-white rounded-lg shadow-md shadow-orange/60 hover:shadow-orange/40 bg-orange '
                    onClick={() => {
                        setChanged(true)
                        changeAvatar()
                    }}
                    >Change Avatar
                </button>
            </div>
        </div>
    )
}