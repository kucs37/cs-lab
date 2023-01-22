import React from 'react'
import type { NextApiRequest, NextPage, NextPageContext } from 'next'
import Class from '@/components/Class'
import { fakeLabs, fakeClass } from '@/fakeData'
import WithNavbar from '@/HOC/WithNavbar'
import { getToken } from 'next-auth/jwt'
import axios from 'axios'
import jwt from 'jsonwebtoken'
import { StudentInfo } from '@/interface/StudentInfo'
import { AnimatePresence } from 'framer-motion'

interface Props {
    data: StudentInfo | null
}

const Home: NextPage<Props> = ({ data }) => {
    return (
        <WithNavbar title="Class | CS-LAB">
            <div className="py-10 px-4 w-full container mx-auto">
                <div>
                    <h2 className="text-2xl font-bold dark:text-white">
                        คลาสเรียน
                    </h2>
                    <div className="mt-4 grid grid-cols-12 gap-4 w-full">
                        <AnimatePresence>
                            {data?.resData?.map((item) => (
                                <Class
                                    key={item.fkSubjectId}
                                    title={item.subject.name}
                                    code={item.fkSubjectId}
                                    section={item.section.sectionId}
                                    labs={fakeLabs as any}
                                />
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </WithNavbar>
    )
}

export default Home

export async function getServerSideProps(context: NextPageContext) {
    const res: StudentInfo = { resCode: '200', resData: fakeClass, msg: '' }
    return { props: { data: res } }
    // try {
    //     const { req } = context
    //     const token = await getToken({
    //         req: req as NextApiRequest,
    //         secret: process.env.SECRET,
    //     })

    //     const { data } = await axios.get<StudentInfo>(
    //         process.env.API_BASE_URL + '/classroom/studentInfo',
    //         {
    //             headers: {
    //                 Authorization: `Bearer ${jwt.sign(
    //                     token!,
    //                     process.env.SECRET!
    //                 )}`,
    //             },
    //         }
    //     )

    //     return {
    //         props: { data },
    //     }
    // } catch (error) {
    //     return { props: { data: null } }
    // }
}
