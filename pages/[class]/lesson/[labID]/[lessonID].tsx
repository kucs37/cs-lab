import { useEffect } from 'react'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'

import WithNavbar from '@/HOC/WithNavbar'
import Backto from '@/components/Common/Backto'
import Footer from '@/components/Lessons/Common/Footer'
import Markdown from '@/components/Lessons/Markdown'
import Badge from '@/components/Common/Badge'

import { useLessonCTX } from '@/Context/Lessons'
import { LessonQuizzesI } from '@/Context/Lessons/interface'

function LabID({
    labMD,
    answers,
    isClosed,
}: {
    labMD: string
    answers: LessonQuizzesI[]
    isClosed: boolean
}) {
    const router = useRouter()
    const backToHref = `/${router.query.class}`
    const { setLessonQuizzes } = useLessonCTX()

    useEffect(() => {
        setLessonQuizzes(answers)
    }, [])

    return (
        <WithNavbar title="Lab - CS LAB" className="bg-white">
            <div className="min-h-full h-full ">
                <div className="container mx-auto px-4 py-10 max-w-2lg h-full w-full">
                    <Backto href={backToHref} />

                    <div className="flex flex-col md:flex-row w-full h-full gap-6 my-10">
                        <div className="prose">
                            <h2 className="text-lg">
                                CS Python Lab 01 Input Process Output
                            </h2>
                            {isClosed && (
                                <Badge title="อ่านอย่างเดียว" color="red" />
                            )}

                            <ul className="text-gray-500">
                                <Link
                                    href={`${router.asPath}/01 Elab's Automatic Grading`}
                                >
                                    <a className="no-underline text-gray-900">
                                        <li>
                                            01 Elab&apos;s Automatic Grading
                                        </li>
                                    </a>
                                </Link>
                                <li>02 Elab&apos;s Manual Grading</li>
                                <li>03 Reusing Submitted Answer</li>
                                <li>04 Variable and Basic Output</li>
                                <li>05 Expression</li>
                                <li>06 Basic Input</li>
                                <li>07 - Exercise 1.1: Input Process Output</li>
                                <li>08 Exercise 1.2: Input Process Output</li>
                            </ul>
                        </div>
                        <div className="prose prose-base max-w-full flex-1">
                            <Markdown labMD={labMD} />
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </WithNavbar>
    )
}

export default LabID

// Fake Datas
import { fakeMarkdown } from '@/fakeData'
export async function getServerSideProps(ctx: GetServerSideProps) {
    const fetchedAns: LessonQuizzesI[] = []
    return {
        props: {
            labMD: fakeMarkdown,
            answers: fetchedAns,
            isClosed: true,
        },
    }
}
