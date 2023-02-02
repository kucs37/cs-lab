import Backto from '@/components/Common/BackArrow'
import Badge from '@/components/Common/Badge'
import { IoClose, IoCheckmark } from 'react-icons/io5'
import clsx from 'clsx'

interface Props {
    title: string
    className?: string
}
function Outline({ title, className }: Props) {
    return (
        <div className={clsx('break-words', className)}>
            <Badge title="อ่านอย่างเดียว" />
            <h4 className="text-lime-600 mt-2">{title}</h4>
        </div>
    )
}

export default Outline
