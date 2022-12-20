import Backto from '@/components/Common/Backto'
import Badge from '@/components/Common/Badge'
import { useRouter } from 'next/router'
import Outline from '../Outline'

interface Props {
    title: string
    isClosed: boolean
}
function LeftSection({ title, isClosed }: Props) {
    const router = useRouter()
    const backToHref = `/${router.query.class}`
    return (
        <div className="col-span-3 2xl:col-span-2 hidden md:block relative border-r bg-white dark:bg-[#27272A] border-gray-300 dark:border-[#6B6B6B]">
            <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-scroll p-4">
                <div>
                    <Backto
                        href={backToHref}
                        className="mb-4 dark:text-[#E0E2E8]"
                    />
                    <h2 className="text-xl font-bold mb-4 dark:text-[#E0E2E8]">
                        {title}
                    </h2>

                    {isClosed && (
                        <Badge className="my-4" title="อ่านอย่างเดียว" />
                    )}
                </div>

                <Outline />
            </div>
        </div>
    )
}

export default LeftSection
