import { useEffect, useState } from 'react'
import SaveStatus from '../../SaveStatus'
import { useAppDispatch } from '@/store/hooks'
import { openConsole } from '@/store/slices/menuSlice'
import { BsCheck2All, BsTerminal } from 'react-icons/bs'

interface Props {}
function Header({}: Props) {
    const [status, setstatus] = useState<'saving' | 'saved'>('saved')
    const dispatch = useAppDispatch()
    const handleOnRun = () => {
        dispatch(openConsole())
    }

    useEffect(() => {
        if (status === 'saving') {
            setTimeout(() => {
                setstatus('saved')
            }, 1000)
        }
    }, [status])
    return (
        <div className="border-b dark:border-secondary-2 py-2 px-4 flex justify-between">
            <SaveStatus status={status} />
            <div className="flex items-center gap-2">
                <button
                    onClick={handleOnRun}
                    className="bg-lime-400 dark:bg-[#A7D456] border-b-4 active:border-b-2 transition-all duration-50 border-lime-500 dark:border-[#79A139] text-lime-800 dark:text-[#476021]  py-2 px-4 rounded-lg flex items-center gap-1"
                >
                    <BsTerminal />
                    Run
                </button>

                <button className="bg-yellow-400 dark:bg-[#E2BD44] border-b-4 active:border-b-2  transition-all duration-50 border-yellow-500 dark:border-[#C19834] text-yellow-800 dark:text-[#7D4F1F] py-2 px-4 rounded-lg flex items-center gap-1 ">
                    <BsCheck2All />
                    Submit
                </button>
            </div>
        </div>
    )
}

export default Header
