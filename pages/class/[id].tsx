import { useState } from 'react'
import Card from '@components/Lab/Card'
import Header from '@components/Lab/Header'
import Backto from '@components/Backto'
import WithNavbar from '@layouts/WithNavbar'
import Labs from '../../fakeData'
type showType = 'all' | 'open' | 'close'

function Class() {
    const [show, setShow] = useState<showType>('all')

    const handleOnClick = (type: showType) => {
        setShow(type)
    }
    return (
        <>
            <WithNavbar>
                <div className="px-3 container mx-auto mt-2 my-10">
                    <Backto className="my-6" />
                    <div className="bg-white  p-6 rounded-lg shadow-sm">
                        <Header />

                        <hr />
                        <div className="my-6">
                            <h2 className="text-2xl font-bold">
                                แลป ({Labs.length})
                            </h2>
                            <div className="flex flex-wrap items-center gap-2 my-4">
                                <button
                                    onClick={() => handleOnClick('all')}
                                    className={`rounded-full px-4 py-1 border-2 ${
                                        show == 'all' &&
                                        'bg-gray-900 text-white'
                                    } border-gray-900 active:bg-gray-900 active:text-white`}
                                >
                                    <p>ทั้งหมด</p>
                                </button>
                                <button
                                    onClick={() => handleOnClick('open')}
                                    className={`rounded-full px-4 py-1 border-2 ${
                                        show == 'open' &&
                                        'bg-gray-900 text-white'
                                    } border-gray-900 active:bg-gray-900 active:text-white`}
                                >
                                    <p>เปิดการส่งงาน</p>
                                </button>
                                <button
                                    onClick={() => handleOnClick('close')}
                                    className={`rounded-full px-4 py-1 border-2 ${
                                        show == 'close' &&
                                        'bg-gray-900 text-white'
                                    } border-gray-900 active:bg-gray-900 active:text-white`}
                                >
                                    <p>อ่านอย่างเดียว</p>
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-4 place-items-stretch">
                            {Labs.filter(({ end }) => {
                                const isEnd = new Date(end) < new Date()
                                if (show == 'all') {
                                    return true
                                } else if (show == 'open') {
                                    return !isEnd
                                } else if (show == 'close') {
                                    return isEnd
                                }
                            }).map(({ title, problems, end }) => (
                                <Card
                                    title={title}
                                    problems={problems}
                                    end={end}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </WithNavbar>
        </>
    )
}

export default Class
