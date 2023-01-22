import { GetServerSideProps } from 'next'
import WithNavbar from '@/HOC/WithNavbar'
import LeftSection from '@/components/Lessons/LeftSection'
import RightSection from '@/components/Lessons/RightSection'
import { serialize } from 'next-mdx-remote/serialize'
import { readFileSync } from 'fs'
import parseMD from 'parse-md'
import { OutlineI } from '@/interface/Outline'
import Hamburger from '@/components/Lessons/Outline/Hamburger'
import path from 'path'

interface Props {
    metadata: {
        outline: OutlineI[]
    }
    content: string
    answers: string[]
    isClosed: boolean
    title: string
}

function LabID({ metadata, content, answers, isClosed, title }: Props) {
    return (
        <WithNavbar
            hamburgerChild={<Hamburger outline={metadata.outline} />}
            title="CS Python Lab 01 Input Process Output | CS LAB"
        >
            <div className="grid grid-cols-12 items-center w-full h-full px-6 md:px-0">
                {/* <LeftSection
                    title="CS Python Lab 01 Input Process Output"
                    isClosed={isClosed}
                /> */}
                <RightSection
                    title={title}
                    outline={metadata.outline}
                    labMD={content}
                />
            </div>
        </WithNavbar>
    )
}

export default LabID

export async function getServerSideProps(ctx: GetServerSideProps) {
    const fetchedAns: string[] = []
    const mdxPath = path.join(process.cwd(), 'fakeData/MDX/lesson01.mdx')
    const file = readFileSync(mdxPath, 'utf8')
    const { metadata, content } = parseMD(file)
    const mdxSource = await serialize(content, {
        mdxOptions: {
            development: false,
        },
    })

    return {
        props: {
            title: "01 Elab's Automatic Grading",
            metadata,
            content: mdxSource,
            answers: fetchedAns,
            isClosed: true,
        },
    }
}
