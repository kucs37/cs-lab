import { useEffect } from 'react'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'

import WithNavbar from '@/HOC/WithNavbar'
import Backto from '@/components/Common/Backto'
import Footer from '@/components/Lessons/Common/Footer'
import Markdown from '@/components/Lessons/Markdown'

import { useLessonCTX } from '@/Context/Lessons'
import { LessonQuizzesI } from '@/Context/Lessons/interface'

function LabID({
    labMD,
    answers,
}: {
    labMD: string
    answers: LessonQuizzesI[]
}) {
    const router = useRouter()
    const backToHref = `/${router.query.class}`
    const { setLessonQuizzes } = useLessonCTX()

    useEffect(() => {
        setLessonQuizzes(answers)
    }, [])

    return (
        <WithNavbar title="Lab - CS LAB" className="bg-white">
            <div className="min-h-full h-full">
                <div className="container mx-auto px-4 md:px-6 lg:px-0 pt-6 pb-10 md:max-w-4xl h-full prose">
                    <Backto href={backToHref} />
                    <Markdown labMD={labMD} />
                    <Footer />
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
        },
    }
}
