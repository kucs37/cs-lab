import Backto from '@/components/Common/Backto'
import Badge from '@/components/Common/Badge'
import { useRouter } from 'next/router'
import Outline from './Outline'

interface Props {
    title: string
    isClosed: boolean
}
function LeftSection({ title, isClosed }: Props) {
    const router = useRouter()
    const backToHref = `/${router.query.class}`
    return (
        <div className="hidden md:block relative border-r border-gray-300 py-2 px-4 w-1/4">
            <div className="sticky top-20">
                <Backto href={backToHref} className="mb-4" />
                <h2 className="text-xl font-bold mb-4">{title}</h2>

                {isClosed && (
                    <Badge
                        className="my-4"
                        title="อ่านอย่างเดียว"
                        backgroundColor="#fecaca"
                        color="#ef4444"
                    />
                )}
                <Outline />
            </div>
        </div>
    )
}

export default LeftSection
