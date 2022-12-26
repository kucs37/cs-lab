import Link from 'next/link'
import Problem from '@/interface/Problem'
import { useRouter } from 'next/router'
import Badge from '@/components/Common/Badge'
import { smartTitle } from '@/utils'
import Status from '../Class/Status'

interface Props {
    title: string
    isClosed: boolean
    problems: Problem[]
    id: string
    type: string
}

function Card({ title, isClosed, problems, id, type }: Props) {
    const router = useRouter()
    const success = problems.filter(({ status }) => status == 'success').length
    const isLesson = type === 'LS'
    const hrefTo = isLesson
        ? `${router.asPath}/lesson/${id}/01#77`
        : `${router.asPath}/problem/${id}`

    return (
        <Link href={hrefTo}>
            <a className="col-span-12 md:col-span-6 xl:col-span-4">
                <div className="rounded-lg border dark:border-[#6B6B6B] bg-white dark:bg-[#33373A]  w-full h-full px-6 py-4 shadow-lg flex justify-end flex-col gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                        {isClosed && <Badge title="อ่านอย่างเดียว" />}
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-lg text-gray-900 dark:text-[#E0E2E8]">
                            {smartTitle(title)}
                        </h3>

                        <Status items={problems.map(({ status }) => status)} />
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default Card
