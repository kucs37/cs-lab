import WithNavbar from '@layouts/WithNavbar'
import Header from '@components/Lab/Header'
import Backto from '@components/Common/Backto'
import Problem from '@components/Lab/Problem'
import Breadcrumb from '@components/Common/Breadcrumb'

type Result = 'success' | 'failed' | 'not-attempted'

interface Lab {
    title: string
    id: number
    problems: Problem[]
    end: string
}

interface Problem {
    name: string
    result: Result[]
    id: number
}

const mock: Lab = {
    title: 'CS Python Lab 01 Input Process Output',
    id: 101,
    problems: [
        {
            name: "01 Elab's Automatic Grading",
            result: ['success'],
            id: 1,
        },
        {
            name: "02 Elab's Manual Grading",
            result: ['success', 'success'],
            id: 2,
        },
        {
            name: '03 Reusing Submitted Answer',
            result: ['success'],
            id: 3,
        },
        {
            name: '04 Variable and Basic Output',
            result: ['success', 'success', 'success', 'success'],
            id: 4,
        },
        {
            name: '05 Expression',
            result: ['success', 'success', 'success', 'success'],
            id: 5,
        },
        {
            name: '06 Basic Input',
            result: ['success'],
            id: 6,
        },
        {
            name: '07 - Exercise 1.1: Input Process Output',
            result: [
                'success',
                'success',
                'success',
                'success',
                'success',
                'success',
                'success',
                'success',
            ],
            id: 7,
        },
        {
            name: '08 Exercise 1.2: Input Process Output',
            result: [
                'success',
                'success',
                'success',
                'success',
                'success',
                'success',
                'success',
                'success',
            ],
            id: 8,
        },
    ],
    end: '2022-07-26',
}

function Lab() {
    const result: Result[] = mock.problems.map(({ result }: Problem) => {
        if (result.every((status) => status == 'success')) return 'success'
        return 'failed'
    })

    return (
        <WithNavbar>
            <div className="px-3 container mx-auto mt-2 my-10">
                <div className="my-6">
                    <Backto />
                    <Breadcrumb />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <Header
                        title={mock.title}
                        end={mock.end}
                        id={mock.id}
                        result={result}
                    />

                    <hr />

                    <div className="my-6">
                        <div className="grid grid-cols-12 gap-4 place-items-stretch">
                            {mock.problems.map(({ name, id, result }) => (
                                <Problem
                                    key={id}
                                    title={name}
                                    id={mock.id}
                                    result={result}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </WithNavbar>
    )
}

export default Lab
