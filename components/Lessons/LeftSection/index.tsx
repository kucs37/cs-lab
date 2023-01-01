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
        <div className="col-span-3 2xl:col-span-2 hidden md:block relative border-r bg-white dark:bg-primary-1 border-gray-300 dark:border-secondary-2">
            <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-scroll p-4">
                <div>
                    <Backto href={backToHref} className="mb-4" />

                    <h2 className="text-xl font-bold mb-4 dark:text-ascent-1">
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
