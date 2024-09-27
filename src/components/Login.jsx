import React from "react";
import { FcGoogle } from 'react-icons/fc'
const Login = () => {
    return (
        <div className="relative w-screen h-screen">
            <div className="absolute inset-0 bg-slate-400 flex items-center justify-center p-4">
                <div className="w-full md:w-48 p-4 bg-slate-200 shadow-2x1 rounded-md backdrop-blur-md flex-col items-center justify-center">
                    <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-slate-300 cursor-pointer hover:bg-slate-400 hover:shadow-md duration-100 ease-in-out transition-all">
                        <FcGoogle />
                        Sign in with Google
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login    
