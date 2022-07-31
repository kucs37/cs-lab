import type { NextPage } from 'next'
import { useRecoilState } from 'recoil'
import InputForm from '@components/InputForm'
import { counterState } from '@store/counterState'
import AsyncBtn from '@components/AsynBtn'
import LoginCard from '@components/LoginCard'
import { FcGoogle } from 'react-icons/fc'
import { useState } from 'react'

const Home: NextPage = () => {
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
                    <InputForm
                        size="text-md"
                        title="บัญชีผู้ใช้เครือข่ายนนทรี"
                        placeholder="เช่น b63xxxxxxxx หรือ regxxx"
                    />
                    <InputForm
                        size="text-md"
                        type="password"
                        title="รหัสผ่าน"
                        placeholder="รหัสผ่านบัญชีผู้ใช้เครือข่ายนนทรี"
                    />
                </div>
                <AsyncBtn onClick={handleSubmit} isLoading={isSubmit}>
                    เข้าสู่ระบบ
                </AsyncBtn>

                <div className="flex justify-between items-center gap-4 my-4">
                    <span className="w-full border-t-2"></span>
                    <h6>หรือ</h6>
                    <span className="w-full border-t-2"></span>
                </div>
                <LoginCard>
                    <FcGoogle size="1.25rem" className="mr-4" />
                    <h2>เข้าสู่ระบบด้วย Google KU</h2>
                </LoginCard>
            </div>
        </div>
    )
}

export default Home
