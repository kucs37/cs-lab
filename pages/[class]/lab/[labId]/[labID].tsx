import WithNavbar from '@/HOC/WithNavbar'
import ReactMarkdown from 'react-markdown'
import Backto from '@/components/Common/Backto'
import { useRouter } from 'next/router'
import rehypeRaw from 'rehype-raw'
import LabMD from '@/fakeData/LabMD'
import { mdComponents } from '@/components/Lessons/Markdown'
import LessonsCtx from '@/Context/Lessons'
import Footer from '@/components/Lessons/Common/Footer'
function LabID() {
    const router = useRouter()
    const backToHref = `/${router.query.class}/lab/${router.query.labId}`

    return (
        <LessonsCtx>
            <WithNavbar title="Lab - CS LAB" className="bg-white">
                <div className="min-h-full h-full">
                    <div className="container mx-auto px-4 md:px-6 lg:px-0 pt-6 pb-10 md:max-w-4xl h-full prose">
                        <Backto href={backToHref} />

                        <ReactMarkdown
                            className="my-10"
                            rehypePlugins={[rehypeRaw]}
                            components={mdComponents}
                        >
                            {LabMD}
                        </ReactMarkdown>
                        <Footer />
                    </div>
                </div>
            </WithNavbar>
        </LessonsCtx>
    )
}

export default LabID
