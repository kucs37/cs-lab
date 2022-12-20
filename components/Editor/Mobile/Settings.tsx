import { IoSettingsOutline } from 'react-icons/io5'
import InputRange from '../Settings/InputRange'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { setFontSize, setTabSize } from '@/store/slices/editorSlice'

function Settings() {
    const { fontSize, tabSize } = useAppSelector((state) => state.editor)
    const dispatch = useAppDispatch()

    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 dark:text-[#E0E2E8]">
                    <IoSettingsOutline size="1.5rem" />
                    <h2 className="text-xl font-semibold">การตั้งค่า</h2>
                </div>
            </div>
            <div>
                <h4 className="my-2 dark:text-[#E0E2E8]">ขนาดตัวอักษร</h4>
                <InputRange
                    value={fontSize}
                    onChange={(value) => dispatch(setFontSize(value))}
                    step={2}
                />
            </div>
            <div>
                <h4 className="text-md my-2 dark:text-[#E0E2E8]">ขนาด Tab</h4>
                <InputRange
                    value={tabSize}
                    onChange={(value) => dispatch(setTabSize(value))}
                />
            </div>
        </div>
    )
}

export default Settings
