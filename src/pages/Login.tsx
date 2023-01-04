import React from 'react'
import TextField from '@mui/material/TextField'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@mui/material';



function Login() {
    const [loginForm, setForm] = useState({ username: '', password: "" });
    return (
        <div className="bg-white dark:bg-gray-900">
            <div className="flex justify-center h-screen">
                <div className="hidden bg-cover lg:block lg:w-2/3" style={{ backgroundImage: 'url(https://images.unsplash.com/flagged/photo-1553505192-acca7d4509be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80)' }}>
                    <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                        <div>
                            <h2 className="text-4xl font-bold text-white">Brand</h2>

                            <p className="max-w-xl mt-3 text-gray-300">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                                autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus
                                molestiae
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                    <div className="flex-1">
                        <div className="text-center">
                            <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">Brand</h2>

                            <p className="mt-3 text-gray-500 dark:text-gray-300">Sign in to access your account</p>
                        </div>

                        <div className="mt-8">
                            <form className="mt-6 flex justify-center items-center flex-col gap-5">
                                <TextField className='w-full' id="outlined-basic" label="Email" variant="outlined" />
                                <div className="w-full flex justify-end items-end flex-col">
                                    <a href="#" className="text-sm mb-2 text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</a>
                                    <TextField className='w-full ' id="outlined-basic" label="Password" variant="outlined" />

                                </div>
                                <Button className='w-full' variant="contained">Sign in</Button>
                            </form>
                            <p className="mt-6 text-sm text-center text-gray-400">Don&#x27;t have an account yet? <Link to="/signup" className="text-blue-500 focus:outline-none focus:underline hover:underline">Sign up</Link>.</p>
                        </div>
                    </div>
                </div>
            </div>



        </div>

    )
}

export default Login