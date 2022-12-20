import React from 'react'
import { useAppSelector } from '@/store/hooks'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { format } from 'date-fns'
import th from 'date-fns/locale/th'
import Testcase from '../../Testcase'
import Editor from '../../Editor'

function EachHistory() {
    const { selected } = useAppSelector((state) => state.history)
    const itemDate = new Date(selected!.date || '')

    return (
        <div className="flex-1 flex flex-col gap-4 text-[#E0E2E8]">
            <div className="flex justify-between">
                <div>
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
                    <Testcase status={selected?.status || []} />
                </div>
            </div>

            <Editor />
        </div>
    )
}

export default EachHistory
