import type { NextPage } from 'next'
import { useRecoilState } from 'recoil'
import { counterState } from '@store/counterState'
import AsyncBtn from '@components/AsynBtn'
import { useState } from 'react'
import { createTheme, TextField, ThemeProvider } from '@mui/material'

const textFieldTheme = createTheme({
    palette: {
        primary: {
            main: '#84CC16',
        },
    },
    shape: {
        borderRadius: '8px',
    },
    typography: {
        fontFamily: 'Noto Sans Thai',
    },
})

const Login: NextPage = () => {
    const [counter, setCounter] = useRecoilState(counterState)
    const [isSubmit, setIsSubmit] = useState<boolean>(false) // Test Async Button component

    const handleSubmit = () => {
        setIsSubmit(true)
        setTimeout(() => {
            setIsSubmit(false)
        }, 1000)
    }
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
                                style: {
                                    fontWeight: 'bold',
                                },
                            }}
                            sx={{ fontWeight: 'bold' }}
                            placeholder="เช่น b63xxxxxxxx หรือ regxxx"
                        />
                        <TextField
                            label="รหัสผ่าน"
                            type="password"
                            InputLabelProps={{
                                style: {
                                    fontWeight: 'bold',
                                },
                            }}
                            variant="outlined"
                            placeholder="รหัสผ่านบัญชีผู้ใช้เครือข่ายนนทรี"
                        />
                    </ThemeProvider>
                    <AsyncBtn isLoading={false} onClick={() => {}}>
                        เข้าสู่ระบบ
                    </AsyncBtn>
                </div>
            </div>
        </div>
    )
}

export default Login
