import Description from '../Description'
import useDrag from '@/hooks/useDrag'
import { useRef, useState, useEffect } from 'react'
import InputRange from './InputRange'
import Select from '@/components/Common/Select'

function Settings() {
    return (
        <div className="p-4 h-full overflow-y-scroll">
            <h2 className="text-xl font-semibold">การตั้งค่า</h2>

            <h4 className="text-md mt-4">ขนาดตัวอักษร</h4>
            <InputRange
                value={16}
                onChange={(value) => console.log(value)}
                unit="px"
                step={2}
            />

            <h4 className="text-md mt-4">ขนาด Tab</h4>
            <InputRange value={4} onChange={() => {}} />

            <h4 className="text-md mt-4">ธีม</h4>
            <Select
                className="mt-2"
                selected={'light'}
                options={['light', 'dark', 'spooky']}
                onSelect={() => {}}
            />
        </div>
    )
}

export default Settings
