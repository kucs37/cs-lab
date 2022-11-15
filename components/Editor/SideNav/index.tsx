import Back from './Back'
import Button from './Button'
import { IoArrowBackOutline, IoSettingsOutline } from 'react-icons/io5'
import { AiOutlineHistory } from 'react-icons/ai'
import { useRouter } from 'next/router'
function Buttons() {
    const router = useRouter()
    const backToHref = `/${router.query.class}`
    return (
        <div className="flex items-center gap-2">
            <Button
                tooltip="ย้อนกลับ"
                icon={<IoArrowBackOutline size="1.75rem" />}
                onClick={() => router.push(backToHref)}
            />
            <Button
                tooltip="ประวัติการส่ง"
                icon={<AiOutlineHistory size="1.75rem" />}
                onClick={() => {}}
            />

            <Button
                tooltip="ตั้งค่า"
                icon={<IoSettingsOutline size="1.75rem" />}
                onClick={() => {}}
            />
        </div>
    )
}

export default Buttons
