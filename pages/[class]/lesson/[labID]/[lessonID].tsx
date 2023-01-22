import { GetServerSideProps } from 'next'
import WithNavbar from '@/HOC/WithNavbar'
import Markdown from '@/components/Lessons/RightSection/Markdown'
import { serialize } from 'next-mdx-remote/serialize'
import { readFileSync } from 'fs'
import parseMD from 'parse-md'
import { OutlineI } from '@/interface/Outline'
import Hamburger from '@/components/Lessons/Outline/Hamburger'
import path from 'path'
import { useRouter } from 'next/router'
import Backto from '@/components/Common/Backto'
import Badge from '@/components/Common/Badge'
import Footer from '@/components/Lessons/RightSection/Common/Footer'

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
    const backHref = router.asPath.split('/').slice(0, -3).join('/')
    return (
        <WithNavbar
            hamburgerChild={<Hamburger outline={metadata.outline} />}
            title="CS Python Lab 01 Input Process Output | CS LAB"
        >
            <div className="flex justify-center py-6 md:py-10 gap-10 relative">
                <div className="w-full md:w-2/3 xl:w-1/2 md:px-10">
                    <Backto href={backHref} />
                    <div className="mt-4 mb-6">
                        <Badge title="อ่านอย่างเดียว" className="my-3" />
                        <h4 className="text-lime-600">{title}</h4>
                        <h2 className="text-2xl md:text-4xl dark:text-ascent-1 font-bold">
                            List Index และการเข้าถึง (access) ข้อมูลใน List
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
