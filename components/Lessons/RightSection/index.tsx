import Footer from './Common/Footer'
import Markdown from './Markdown/index'
import { OutlineI } from '@/interface/Outline'
import Backto from '@/components/Common/Backto'
import ScrollDetect from '../ScrollDetect'
import { useRouter } from 'next/router'

interface Props {
    title: string
    outline: OutlineI[]
    labMD: string
}

function RightSection({ title, outline, labMD }: Props) {
    const router = useRouter()
    const backHref = router.asPath.split('/').slice(0, -3).join('/')

    return (
        <div className="col-span-12 md:col-span-9 2xl:col-span-10 flex py-6 md:py-10 gap-10 relative">
            <div className="w-full md:w-9/12 md:px-10">
                <Backto href={backHref} className="md:hidden" />
                <h4 className="text-lime-600 my-2">{title}</h4>
                <Markdown labMD={labMD} />
                <Footer />
            </div>

            <ScrollDetect
                outline={outline}
                className="hidden md:block sticky top-20"
            />
        </div>
    )
}

export default RightSection
