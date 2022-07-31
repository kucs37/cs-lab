<<<<<<< HEAD
import React from 'react'
import type { NextPage } from 'next'
import { FaGraduationCap } from 'react-icons/fa'
import ProfileImage from '@components/ProfileImage'
import Class from '@components/Class'

const Home: NextPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen w-full flex flex-col pt-4">
            <div className="container mx-auto max-w-5xl flex justify-between items-center">
                <h1 className="text-xl">CS Lab</h1>
                <div className="bg-white pl-4 pr-2 py-2  rounded-full shadow-sm w-fit">
                    <div className="flex w-full items-center gap-2">
                        <div className="flex flex-col">
                            <h2 className="text-md font-bold">
                                นายศรชัย สมสกุล
                            </h2>
                            <div className="inline-flex gap-2 items-center">
                                <FaGraduationCap />
                                <p>นิสิตชั้นปีที่ 1</p>
                            </div>
                        </div>
                        <ProfileImage />
                    </div>
=======
import type { NextPage } from 'next';
import { useRecoilState } from 'recoil';
import { counterState } from '@store/counterState';
import AsyncBtn from '@components/AsynBtn';
import LoginCard from '@components/LoginCard';
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
import { createTheme, TextField, ThemeProvider } from '@mui/material';

const textFieldTheme = createTheme({
    palette: {
        primary: {
            main: '#111827',
        },
    },
    shape: {
        borderRadius: '8px',
    },
});

const Home: NextPage = () => {
    const [counter, setCounter] = useRecoilState(counterState);
    const [isSubmit, setIsSubmit] = useState<boolean>(false); // Test Async Button component

    const handleSubmit = () => {
        setIsSubmit(true);
        setTimeout(() => {
            setIsSubmit(false);
        }, 1000);
    };
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <div className="flex flex-col w-full max-w-sm p-4  rounded-2xl bg-white shadow-sm py-6">
                <div className="w-full mb-6">
                    <h1 className="text-3xl text-center font-semibold mb-2 text-lime-500 mt-4">
                        CS Lab
                    </h1>
                </div>

                <div className="my-4 flex flex-col gap-6">
                    <ThemeProvider theme={textFieldTheme}>
                        <TextField
                            label="บัญชีผู้ใช้เครือข่ายนนทรี"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            placeholder="เช่น b63xxxxxxxx หรือ regxxx"
                        />
                        <TextField
                            label="รหัสผ่าน"
                            type="password"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            placeholder="รหัสผ่านบัญชีผู้ใช้เครือข่ายนนทรี"
                        />
                    </ThemeProvider>
>>>>>>> 5475d8bb31942961605e211033ddfa9bc549ae21
                </div>
            </div>
            <div className="my-10 bg-white p-4 rounded-lg h-full">
                <h2 className="text-2xl font-bold">คลาสเรียน</h2>
                <Class />
            </div>
        </div>
    );
};

export default Home;
