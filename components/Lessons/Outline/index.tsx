import Item from './Item'
import { fakeLabs } from '@/fakeData'

function Outline() {
    return (
        <div className="text-gray-400 flex flex-col gap-3 px-2 mb-20">
            {fakeLabs[0].problems.map(({ name, status }, index) => (
                <Item
                    key={name}
                    name={name}
                    status={status}
                    active={index === 0}
                />
            ))}
        </div>
    )
}

export default Outline
