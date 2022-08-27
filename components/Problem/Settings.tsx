import { themes } from './theme'
import { themesI } from '@/interface/Themes'
import Select from '@/components/Common/Select'
import { useRef } from 'react'
import { useLocalStorage, useOnClickOutside } from 'usehooks-ts'
import { useRecoilState } from 'recoil'
import { problemState } from '@/store/ProblemState'
import { GrFormClose } from 'react-icons/gr'

function Settings() {
    const [theme, setTheme] = useLocalStorage<themesI>('theme', 'bespin')
    const [fontSize, setFontSize] = useLocalStorage<string>('fontSize', '16px')

    const settingsRef = useRef<HTMLDivElement>(null)
    const [_, setProblem] = useRecoilState(problemState)

    useOnClickOutside(settingsRef, () =>
        setProblem((prev) => ({ ...prev, isSettings: false }))
    )

    return (
        <div className="fixed w-full flex justify-center items-center h-screen bg-gray-900 bg-opacity-50 z-40">
            <div className="container max-w-sm md:max-w-2xl h-fit border-2 rounded-lg drop-shadow-lg">
                <div className="bg-white w-full h-full p-6" ref={settingsRef}>
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-semibold">ตั้งค่า</h2>
                        <button
                            className="inline-flex items-center gap-2"
                            onClick={() =>
                                setProblem((prev) => ({
                                    ...prev,
                                    isSettings: false,
                                }))
                            }
                        >
                            <h4>ปิด</h4>
                            <GrFormClose size="1.25rem" />
                        </button>
                    </div>
                    <div className="mt-6 flex flex-col gap-4">
                        <h4>ธีม</h4>
                        <Select
                            className="w-full"
                            options={themes.map(({ name }) => name)}
                            onSelect={(theme: themesI) => setTheme(theme)}
                            selected={theme}
                        />

                        <h4>ขนาดตัวอักษร</h4>

                        <input
                            type="number"
                            className="border-2 text-md p-2 rounded-lg"
                            value={fontSize.replace('px', '')}
                            onChange={(e) => setFontSize(`${e.target.value}px`)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings
