import { HistoryI } from '@/interface/History'
import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { format } from 'date-fns'
import th from 'date-fns/locale/th'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { setSelected } from '@/store/slices/historySlice'
import Testcase from '../../Testcase'

function Item(item: HistoryI) {
    const selected = useAppSelector((state) => state.history.selected)
    const dispatch = useAppDispatch()
    const itemDate = new Date(item.date)
    const slectedDate = new Date(selected?.date || '')

    const isSelected = selected && slectedDate.getTime() === itemDate.getTime()
    const handleOnClick = () => {
        dispatch(setSelected(item))
    }

    return (
        <div
            onClick={handleOnClick}
            className={`border-2 ${
                isSelected
                    ? 'md:border-gray-900 md:dark:border-[#E0E2E8]'
                    : 'md:border-gray-200 dark:border-[#6B6B6B]'
            } p-2 rounded-lg cursor-pointer dark:text-[#E0E2E8] dark:border-[#6B6B6B]`}
        >
            <div>
                <h4 className="text-md font-bold">
                    ส่งเมื่อวันที่{' '}
                    {format(itemDate, 'dd MMM yyyy', {
                        locale: th,
                    })}
                </h4>
                <div className="flex items-center gap-1">
                    <AiOutlineClockCircle />
                    <h4 className="text-sm">
                        เวลา {format(itemDate, 'HH:mm')} น.
                    </h4>
                </div>
            </div>

            <Testcase status={item.status} />
        </div>
    )
}

export default Item
