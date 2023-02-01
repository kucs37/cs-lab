import { useState } from 'react'
import BackArrow from '@/components/Common/BackArrow'
import WithNavbar from '@/HOC/WithNavbar'
import { StudentInfo } from '@/interface/StudentInfo'
import axios from 'axios'
import { NextPageContext, NextApiRequest } from 'next'
import { getToken } from 'next-auth/jwt'
import jwt from 'jsonwebtoken'
import { GetLabs } from '@/interface/GetLabs'
import { useRouter } from 'next/router'
import { fakeLabs } from '@/__mock__'
import Banner from '@/components/Class/Banner'
import { FaCheck, FaTimes } from 'react-icons/fa'
import Link from 'next/link'

interface Props {
    data: GetLabs | null
}

const InLesson: React.FC<Props> = ({ data }) => {
    const [Data, setData] = useState<GetLabs | null>(data)
    const router = useRouter()

    const currentPath = router.asPath

    return (
        <WithNavbar title="Fundamental Programming Concepts | CS-LAB">
            <div className="container mx-auto w-full md:max-w-6xl px-4 pb-10">
                <BackArrow className="my-6" />
                <Banner
                    code={Data?.resData[0].fkSubjectId!}
                    section={Data?.resData[0].sectionId!}
                />

                <table className="table-auto mt-10 w-full rounded-lg overflow-hidden">
                    <thead>
                        <tr className="bg-zinc-50">
                            <th className="text-start p-2">ชื่อ</th>
                            <th>สถานะ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fakeLabs[0].problems.map(({ name, status, id }) => {
                            const href = `${currentPath}/${id}`
                            return (
                                <tr
                                    key={name}
                                    className="even:bg-zinc-100 odd:bg-zinc-50"
                                >
                                    <td className="p-2">
                                        <Link
                                            href={href}
                                            className="hover:text-lime-700"
                                        >
                                            {name}
                                        </Link>
                                    </td>
                                    <td className="text-center">
                                        {status === 'success' && (
                                            <FaCheck className="inline text-lime-600 text-xl" />
                                        )}

                                        {status === 'failed' && (
                                            <FaTimes className="inline text-red-500 text-xl" />
                                        )}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </WithNavbar>
    )
}

export default InLesson

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
