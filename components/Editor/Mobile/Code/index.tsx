import { useState, useRef } from 'react'
import Editor from '../../TextEditor'
import Select from './Select'
import Input from '@/components/Editor/BottomBar/Input'
import Output from '@/components/Editor/BottomBar/Output'
function Code() {
    const [selected, setSelected] = useState<'code' | 'input' | 'output'>(
        'code'
    )
    const zoneRef = useRef<HTMLDivElement>(null)
    return (
        <div ref={zoneRef} className="flex flex-col h-full rounded-md relative">
            <Select
                selected={selected}
                onSelect={(selected) => setSelected(selected)}
            />
            {selected === 'code' && <Editor />}
            {selected === 'input' && <Input />}
            {selected === 'output' && <Output />}
        </div>
    )
}

export default Code
