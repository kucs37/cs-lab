import WithNavbar from '@layouts/WithNavbar'
import Header from '@components/Lab/Header'
import Backto from '@components/Backto'

interface Lab {
    title: string
    id: number
    problems: Problem[]
    end: string
}
interface Problem {
    name: string
    status: 'success' | 'failed' | 'not-attempted'
}

const mock: Lab = {
    title: 'CS Python Lab 01 Input Process Output',
    id: 101,
    problems: [
        { name: "01 Elab's Automatic Grading", status: 'success' },
        { name: "02 Elab's Manual Grading", status: 'success' },
        { name: '03 Reusing Submitted Answer', status: 'success' },
        { name: '04 Variable and Basic Output', status: 'success' },
        { name: '05 Expression', status: 'success' },
        { name: '06 Basic Input', status: 'success' },
        {
            name: '07 - Exercise 1.1: Input Process Output',
            status: 'success',
        },
        {
            name: '08 Exercise 1.2: Input Process Output',
            status: 'success',
        },
    ],
    end: '2022-07-26',
}

function Lab() {
    return (
        <WithNavbar>
            <div className="px-3 container mx-auto mt-2 my-10">
                <Backto className="my-6" />
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <Header
                        title={mock.title}
                        end={mock.end}
                        id={mock.id}
                        problems={mock.problems}
                    />

                    <hr />

                    <div className="my-6">

                        
                    </div>
                </div>
            </div>
        </WithNavbar>
    )
}

export default Lab
