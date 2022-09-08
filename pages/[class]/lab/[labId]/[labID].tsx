import WithNavbar from '@/HOC/WithNavbar'
import ReactMarkdown from 'react-markdown'
import Backto from '@/components/Common/Backto'
import { useRouter } from 'next/router'
import rehypeRaw from 'rehype-raw'
import LabMD from '@/fakeData/LabMD'
import { mdComponents } from '@/components/Lessons/Markdown'

function LabID() {
    const router = useRouter()
    const backToHref = `/${router.query.class}/lab/${router.query.labId}`

    return (
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
                    <div className="flex justify-between items-center">
                        <button className="bg-gray-900 text-white w-1/4 py-2 rounded-lg mt-4 shadow-md hover:bg-gray-700">
                            ส่ง
                        </button>
                        <button className="" onClick={() => {}}>
                            ล้างคำตอบ
                        </button>
                    </div>
                </div>
            </div>
        </WithNavbar>
    )
}

export default LabID
