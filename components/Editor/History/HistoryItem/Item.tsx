import { HistoryI } from '@/interface/History'
import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { format } from 'date-fns'
import th from 'date-fns/locale/th'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { setSelected } from '@/store/slices/historySlice'

function Item(item: HistoryI) {
    const selected = useAppSelector((state) => state.history.selected)
    const dispatch = useAppDispatch()

    const isSelected =
        selected && selected.date.getTime() === item.date.getTime()
    const handleOnClick = () => {
        dispatch(setSelected(item))
    }

    return (
        <div
            onClick={handleOnClick}
            className={`border-2 ${
                isSelected ? 'border-gray-900' : 'border-gray-200'
            } p-2 rounded-lg cursor-pointer`}
        >
            <div>
                <h4 className="text-md font-bold">
                    ส่งเมื่อวันที่{' '}
                    {format(item.date, 'dd MMM yyyy', {
                        locale: th,
                    })}
                </h4>
                <div className="flex items-center gap-1">
                    <AiOutlineClockCircle />
                    <h4 className="text-sm">
                        เวลา {format(item.date, 'HH:mm')} น.
                    </h4>
                </div>
            </div>
            <div className="flex items-center flex-wrap bg-gray-200 rounded-lg gap-1 py-1 px-2 w-fit font-bold text-sm mt-2">
                {item.status.map((s, index) => (
                    <span key={index}>{s}</span>
                ))}
            </div>
        </div>
    )
}

export default Item
