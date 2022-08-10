import { Button } from '@mui/material'
import React from 'react'
import { BsCheckLg } from 'react-icons/bs'
import { ImCross } from 'react-icons/im'
import CodeIcon from '@mui/icons-material/Code'

interface Props {}

const Submission: React.FC<Props> = () => {
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full">
                    <div className="overflow-hidden">
                        <table className="min-w-full">
                            <thead className="border-b">
                                <tr>
                                    
                                    <th
                                        scope="col"
                                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                    >
                                        Time Submitted
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                    >
                                        Status
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                    >
                                        Runtime
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                    >
                                        Memory
                                    </th>
                                    <th
                                        scope="col"
                                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                    >
                                        Language
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    {/* <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        <Button variant="text">
                                            <CodeIcon />
                                        </Button>
                                    </td> */}
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        08/10/2022 01:57
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-2">
                                            <BsCheckLg color="green" />
                                            <div className="cursor-pointer hover:font-bold">
                                                [PPPPPPPPP]
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        1058 ms
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        49 MB
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        typescript
                                    </td>
                                </tr>
                                <tr className="border-b">
                                    {/* <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        <Button variant="text">
                                            <CodeIcon />
                                        </Button>
                                    </td> */}
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        08/10/2022 01:57
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-2">
                                            <ImCross color="red" />
                                            <div className="cursor-pointer hover:font-bold">
                                                [PPP--PPPP]
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        N/A
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        N/A
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        typescript
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Submission
