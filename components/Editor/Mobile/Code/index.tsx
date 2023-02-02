import { useState, useRef } from 'react'
import Editor from '../../NonMobile/Editor'
import Select from './Select'
import Console from './Console'
function Code() {
    const [selected, setSelected] = useState<'code' | 'console'>('code')
    const zoneRef = useRef<HTMLDivElement>(null)
    return (
        <div
            ref={zoneRef}
            className="flex flex-col h-full rounded-md overflow-hidden relative"
        >
            <Select
                selected={selected}
                onSelect={(selected) => setSelected(selected)}
            />
            {selected === 'code' ? <Editor /> : null}
            {selected === 'console' ? <Console /> : null}
        </div>
    )
}

export default Code
