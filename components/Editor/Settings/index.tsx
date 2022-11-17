import { useRef } from 'react'
import InputRange from './InputRange'
import { IoClose, IoSettingsOutline } from 'react-icons/io5'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, Dispatch } from '@/store'
import { useOnClickOutside } from 'usehooks-ts'

function Settings() {
    const settingsWindow = useRef<HTMLDivElement>(null)
    const { fontSize, tabSize } = useSelector(
        (state: RootState) => state.editor
    )
    const dispatch = useDispatch<Dispatch>()

    useOnClickOutside(settingsWindow, () => dispatch.menus.toggleSettings())

    return (
        <div className="fixed w-full h-full bg-black bg-opacity-25 z-40 flex items-center justify-center">
            <div
                ref={settingsWindow}
                className="bg-white  rounded-lg py-4 flex flex-col w-1/3 px-4"
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <IoSettingsOutline size="1.5rem" />
                        <h2 className="text-xl font-semibold">การตั้งค่า</h2>
                    </div>
                    <button
                        onClick={() => dispatch.menus.toggleSettings()}
                        className="self-end p-4"
                    >
                        <IoClose size="1.25rem" />
                    </button>
                </div>

                <h4 className="text-md my-2">ขนาดตัวอักษร</h4>

                <InputRange
                    value={fontSize}
                    onChange={(value) => dispatch.editor.setFontSize(value)}
                    step={2}
                />

                <h4 className="text-md my-2">ขนาด Tab</h4>
                <InputRange
                    value={tabSize}
                    onChange={(value) => dispatch.editor.setTabSize(value)}
                />
            </div>
        </div>
    )
}

export default Settings
