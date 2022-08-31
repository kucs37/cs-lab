import Link from 'next/link'
import Problem from '@/interface/Problem'
import { useRouter } from 'next/router'
interface Props {
    title: string
    end: string
    problems: Problem[]
    id: number
}

function Card({ title, end, problems, id }: Props) {
    const router = useRouter()
    const success = problems.filter(({ status }) => status == 'success').length
    const isEnd = new Date(end) < new Date()

    return (
        <Link href={`${router.asPath}/lab/${id}`}>
            <a className="col-span-12 md:col-span-6 xl:col-span-4">
                <div className="rounded-lg border-[1px] bg-white border-gray-50 w-full h-full px-6 py-4 shadow-sm flex flex-col gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                        {isEnd && (
                            <div className="rounded-full px-2 py-1 bg-red-200 w-fit">
                                <p className="text-sm text-red-500 font-bold">
                                    อ่านอย่างเดียว
                                </p>
                            </div>
                        )}
                    </div>
                    <h3 className="font-bold text-lg text-gray-900">{title}</h3>

                    <div className="flex flex-col gap-2">
                        <div className="w-full grid grid-cols-8 gap-1 place-items-stretch">
                            {problems.map(({ name, status }) => (
                                <div
                                    key={name}
                                    className={`h-2 ${
                                        status == 'success'
                                            ? 'bg-lime-500'
                                            : status == 'failed'
                                            ? 'bg-red-500'
                                            : 'bg-gray-200'
                                    }  rounded-full`}
                                ></div>
                            ))}
                        </div>
                        <h6 className="font-bold text-md">
                            {success}/{problems.length}
                        </h6>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default Card
