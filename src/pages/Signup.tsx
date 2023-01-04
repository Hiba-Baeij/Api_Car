import React from 'react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import TextField from '@mui/material/TextField'
import { useDispatch } from 'react-redux';
import { register } from '@/store/Auth';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import { initialState, openNotification } from '@/store/Auth';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Signup() {
    const [userName, setUserName] = useState("");
    const [phonNumber, setPhonNumber] = useState("");
    const [password, setPassword] = useState("");
    const handleClick = () => {
        openNotification(true)
    };

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        openNotification(false)


    };

    const dispatch = useDispatch()
    const registerHandler = () => {
        console.log(userName + " " + phonNumber + " " + password);
        dispatch(register({ userName, phonNumber, password }))
    }
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
                            <Stack spacing={2} sx={{ width: '100%' }}>
                                <Button variant="outlined" onClick={handleClick}>
                                    Open success snackbar
                                </Button>
                                <Snackbar open={initialState.notificationHidden} autoHideDuration={6000} onClose={handleClose}>
                                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                        This is a success message!
                                    </Alert>
                                </Snackbar>
                            </Stack>
                            <form className="mt-6 flex justify-center items-center flex-col gap-5">
                                <TextField className='w-full' label="UserName" variant="outlined" onChange={(e) => setUserName(e.target.value)} />
                                <TextField className='w-full' label="PhoneNumber" variant="outlined" onChange={(e) => setPhonNumber(e.target.value)} />
                                <TextField className='w-full ' label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />

                                <Button className='w-full' variant="contained" onClick={registerHandler}>Sign Up</Button>
                            </form>
                            <p className="mt-6 text-sm text-center text-gray-400">if you have account <Link to="/signup" className="text-blue-500 focus:outline-none focus:underline hover:underline">login</Link></p>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default Signup