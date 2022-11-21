import { GetServerSideProps } from 'next'
import WithNavbar from '@/HOC/WithNavbar'
import { LessonQuizzesI } from '@/Context/Lessons/interface'
import LeftSection from '@/components/Lessons/LeftSection'
import RightSection from '@/components/Lessons/RightSection'
import { serialize } from 'next-mdx-remote/serialize'
import { readFileSync } from 'fs'
import parseMD from 'parse-md'
import { OutlineI } from '@/interface/Outline'

interface Props {
    metadata: {
        outline: OutlineI[]
    }
    content: string
    answers: LessonQuizzesI[]
    isClosed: boolean
}

function LabID({ metadata, content, answers, isClosed }: Props) {
    return (
        <WithNavbar title="CS Python Lab 01 Input Process Output | CS LAB">
            <div className="flex flex-col md:flex-row w-full h-full gap-10 px-2">
                <LeftSection
                    title="CS Python Lab 01 Input Process Output"
                    isClosed={isClosed}
                />
                <RightSection outline={metadata.outline} labMD={content} />
            </div>
        </WithNavbar>
    )
}

export default LabID

export async function getServerSideProps(ctx: GetServerSideProps) {
    const fetchedAns: LessonQuizzesI[] = []
    const file = readFileSync('fakeData/MDX/lesson01.mdx', 'utf8')
    const { metadata, content } = parseMD(file)
    const mdxSource = await serialize(content)

    return {
        props: {
            metadata,
            content: mdxSource,
            answers: fetchedAns,
            isClosed: true,
        },
    }
}
