import Link from 'next/link'
import { useRouter } from 'next/router'
import { Result } from '@/interface/Result'

interface Props {
    title: string
    id: number
    result: Result[]
}

function Problem({ title, id, result }: Props) {
    const router = useRouter()
    const success = result.filter((status) => status == 'success').length

    return (
        <Link href={`${router.asPath}/${id}`}>
            <a className="col-span-12 md:col-span-6 xl:col-span-4">
                <div className="rounded-lg border-[1px] bg-white border-gray-50 w-full h-full px-6 py-4 shadow-sm flex flex-col gap-3">
                    <div className="flex flex-wrap items-center gap-2"></div>
                    <h3 className="font-bold text-lg text-gray-900">{title}</h3>

                    <div className="flex flex-col gap-2">
                        <div className="w-full grid grid-cols-8 gap-1 place-items-stretch">
                            {result.map((status, index) => (
                                <div
                                    key={index}
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
                            {success}/{result.length}
                        </h6>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default Problem
