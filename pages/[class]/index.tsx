import { useState } from 'react'
import Card from '@/components/Lab/Card'
import Backto from '@/components/Common/Backto'
import WithNavbar from '@/HOC/WithNavbar'
import { StudentInfo } from '@/interface/StudentInfo'
import axios from 'axios'
import { NextPageContext, NextApiRequest } from 'next'
import { getToken } from 'next-auth/jwt'
import jwt from 'jsonwebtoken'
import { GetLabs } from '@/interface/GetLabs'
import Section from '@/components/Class/Section'

interface Props {
    data: GetLabs | null
}

type showType = 0 | 1 | 2

const Class: React.FC<Props> = ({ data }) => {
    const [show, setShow] = useState<showType>(0)

    const [Data, setData] = useState<GetLabs | null>(data)

    const handleOnClick = (type: showType) => {
        setShow(type)
    }

    return (
        <WithNavbar title="Fundamental Programming Concepts - CS-LAB">
            <div className="px-3 container mx-auto mt-2 py-10">
                <Backto href="../" />

                <div className="my-6">
                    <Section
                        code={Data?.resData[0].fkSubjectId!}
                        section={Data?.resData[0].sectionId!}
                    />

                    <h3 className="font-bold text-xl my-2">
                        Fundamental Programming Concepts
                    </h3>
                </div>
                <div className="flex flex-wrap items-center gap-2 my-4">
                    <button
                        onClick={() => handleOnClick(0)}
                        className={`rounded-full px-4 py-1 border-2 ${
                            show == 0 && 'bg-gray-900 text-white'
                        } border-gray-900 active:bg-gray-900 active:text-white`}
                    >
                        <p>ทั้งหมด</p>
                    </button>
                    <button
                        onClick={() => handleOnClick(1)}
                        className={`rounded-full px-4 py-1 border-2 ${
                            show == 1 && 'bg-gray-900 text-white'
                        } border-gray-900 active:bg-gray-900 active:text-white`}
                    >
                        <p>เปิดการส่งงาน</p>
                    </button>
                    <button
                        onClick={() => handleOnClick(2)}
                        className={`rounded-full px-4 py-1 border-2 ${
                            show == 2 && 'bg-gray-900 text-white'
                        } border-gray-900 active:bg-gray-900 active:text-white`}
                    >
                        <p>อ่านอย่างเดียว</p>
                    </button>
                </div>
                <hr />

                <div className="grid grid-cols-12 gap-4 place-items-stretch mt-10">
                    {Data?.resData
                        .filter(({ status }) => status == show || show === 0)
                        .map(({ labId, name, status, type, problems }, id) => (
                            <Card
                                key={id}
                                type={type}
                                id={labId}
                                title={name}
                                problems={problems}
                                isClosed={status === 2}
                            />
                        ))}
                </div>
            </div>
        </WithNavbar>
    )
}

export default Class

import { fakeLabs } from '@/fakeData'

export async function getServerSideProps(context: NextPageContext) {
    const res: GetLabs = {
        resCode: '200',
        resData: fakeLabs,
        msg: '',
    }
    return { props: { data: res } }
    try {
        const { req } = context
        const token = await getToken({
            req: req as NextApiRequest,
            secret: process.env.SECRET,
        })

        const { data } = await axios.post<StudentInfo>(
            process.env.API_BASE_URL + '/classroom/getLabs',
            {
                subjectId: context.query.class,
            },
            {
                headers: {
                    Authorization: `Bearer ${jwt.sign(
                        token!,
                        process.env.SECRET!
                    )}`,
                },
            }
        )

        return {
            props: { data },
        }
    } catch (error) {
        return { props: { data: null } }
    }
}
