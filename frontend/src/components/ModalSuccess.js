import React from "react";

export default function ModalSuccess()
{
    return(
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none b-[#423e3e]/50 ">
            <div className="relative my-6 mx-auto w-[250px]">
                <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none border-0">
                    <div className="flex flex-col justify-center p-5 rounded-t gap-5 ">
                        <div className="flex justify-end text-black">
                            <button className="w-[35px] h-[35px] font-bold flex justify-end">X</button>
                        </div>
                        <div className="text-start font-md font-primary">
                            <h3 className="text-bold text-lg font-bold text-orange">Success!</h3>
                            <p className="text-sm">Changes have been saved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}