import { GetServerSideProps } from 'next'
import WithNavbar from '@/HOC/WithNavbar'
import Markdown from '@/components/Lessons/Markdown'
import { serialize } from 'next-mdx-remote/serialize'
import { readFileSync } from 'fs'
import parseMD from 'parse-md'
import { OutlineI } from '@/interface/Outline'
import Hamburger from '@/components/Lessons/Outline/Hamburger'
import path from 'path'
import { useRouter } from 'next/router'
import { motion, useScroll } from 'framer-motion'
import Backto from '@/components/Common/Backto'
import Badge from '@/components/Common/Badge'
import Footer from '@/components/Lessons/Footer'
import TopBar from '@/components/Common/Navigation/TopBar'
import { FaCheck, FaTimes } from 'react-icons/fa'
import { fakeLabs } from '@/__mock__'

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
    const router = useRouter()
    const backHref = router.asPath.split('/').slice(0, -1).join('/')

    return (
        <WithNavbar title="CS Python Lab 01 Input Process Output | CS LAB">
            <div className="flex justify-center px-4 py-6 md:py-10 gap-10 relative">
                <div className="w-full md:w-2/3 2xl:w-1/2 md:px-10">
                    <Backto href={backHref} />

                    <div className="mt-4 mb-6">
                        {isClosed && (
                            <Badge title="อ่านอย่างเดียว" className="my-1" />
                        )}
                        <h4 className="text-lime-600">{title}</h4>
                        <h2 className="text-3xl dark:text-ascent-1 font-bold">
                            การใช้งาน While loop
                        </h2>
                    </div>
                    <Markdown labMD={content} />
                    <Footer />
                </div>
            </div>
        </WithNavbar>
    )
}

export default LabID

export async function getServerSideProps(ctx: GetServerSideProps) {
    const fetchedAns: string[] = []
    const mdxPath = path.join(process.cwd(), '__mock__/MDX/lesson02.mdx')
    const file = readFileSync(mdxPath, 'utf8')
    const { metadata, content } = parseMD(file)
    const mdxSource = await serialize(content, {
        mdxOptions: {
            development: false,
        },
    })

    return {
        props: {
            title: 'CS Python Lab 05 While Loop',
            metadata,
            content: mdxSource,
            answers: fetchedAns,
            isClosed: true,
        },
    }
}
