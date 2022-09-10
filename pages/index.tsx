import React from 'react'
import type { NextApiRequest, NextPage, NextPageContext } from 'next'
import Class from '@/components/Class'
import Labs from '@/fakeData'
import WithNavbar from '@/HOC/WithNavbar'
import { getToken } from 'next-auth/jwt'
import axios from 'axios'
import jwt from 'jsonwebtoken'
import { StudentInfo } from '@/interface/StudentInfo'

export async function getServerSideProps(context: NextPageContext) {
    try {
        const { req } = context
        const token = await getToken({
            req: req as NextApiRequest,
            secret: process.env.SECRET,
        })

        const { data } = await axios.get<StudentInfo>(
            process.env.API_BASE_URL + '/classroom/studentInfo',
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

interface Props {
    data: StudentInfo | null
}

const Home: NextPage<Props> = ({ data }) => {
    return (
        <WithNavbar title="Class - CS-LAB">
            <div className="px-3 container mx-auto mt-2 my-10">
                <div className="p-4 flex flex-col items-center">
                    <div>
                        <h2 className="text-2xl font-bold">คลาสเรียน</h2>
                        <div className="mt-4 grid grid-cols-12 gap-4 w-full">
                            {data?.resData?.map((item) => (
                                <Class
                                    title={item.subject.name}
                                    code={item.fkSubjectId}
                                    section={item.fkSectionId}
                                    labs={Labs}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </WithNavbar>
    )
}

export default Home
