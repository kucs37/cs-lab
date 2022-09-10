import { useState } from 'react'
import { dummySubmissions } from './dummy'
import Submission from './Submission'

function Submissions() {
    const [selected, setSelected] = useState<number | null>(1)

    const handleOnClick = (order: number) => {
        return selected === order ? setSelected(null) : setSelected(order)
    }

    return (
        <div className='w-full flex-1'>
            <Submission
                onClick={() => {}}
                isFirst={true}
                isSelected={true}
                order={1}
                date={new Date()}
                status={['P', 'P']}
                code={`print("Hello World)`}
            />
        </div>
    )
    return (
        <div className="p-4 flex flex-col items-center w-full gap-4 h-full overflow-y-scroll">
            {[
                dummySubmissions.map(({ order, date, status, code }) => (
                    <Submission
                        key={order}
                        isFirst={order == 1}
                        isSelected={selected === order}
                        onClick={() => handleOnClick(order)}
                        order={order}
                        date={date}
                        status={status}
                        code={code}
                    />
                )),
            ]}
        </div>
    )
}

export default Submissions
