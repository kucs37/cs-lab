import Footer from './Common/Footer'
import Markdown from './Markdown/index'
import { OutlineI } from '@/interface/Outline'
import Backto from '@/components/Common/Backto'
import ScrollDetect from '../ScrollDetect'
import { useRouter } from 'next/router'
import Badge from '@/components/Common/Badge'

interface Props {
    title: string
    outline: OutlineI[]
    labMD: string
}

function RightSection({ title, outline, labMD }: Props) {
    const router = useRouter()
    const backHref = router.asPath.split('/').slice(0, -3).join('/')

    return (
        <div className="col-span-12 _md:col-span-9 _2xl:col-span-10 flex justify-center py-6 md:py-10 gap-10 relative">
            <div className="w-full md:w-2/3 xl:w-1/2 md:px-10">
                <Backto href={backHref} />
                <div className="mt-4 mb-6">
                    <Badge title="อ่านอย่างเดียว" className="my-3" />
                    <h4 className="text-lime-600">{title}</h4>
                    <h2 className="text-2xl md:text-4xl dark:text-ascent-1 font-bold">
                        List Index และการเข้าถึง (access) ข้อมูลใน List
                    </h2>
                </div>
                <Markdown labMD={labMD} />

                <Footer />
                
            </div>

            {/* <ScrollDetect
                outline={outline}
                // className="hidden md:block sticky top-20"
            /> */}
        </div>
    )
}

export default RightSection
