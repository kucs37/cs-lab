import Link from 'next/link'
import Lab from '@/interface/Lab'
import Section from '@/components/Class/Section'
import Status from './Status'

interface Props {
    title: string
    code: string
    section: number
    labs: Lab[]
}

function Class({ title, code, section, labs }: Props) {
    return (
        <Link href={`/${code}`}>
            <a className="col-span-12 md:col-span-6 xl:col-span-4">
                <div className="rounded-lg border-[1px] bg-white border-gray-50 w-full px-6 py-4 shadow-lg shadow-gray-200 flex flex-col gap-3 min-w-[300px]">
                    <Section code={code} section={section} />
                    <h3 className="font-bold text-lg text-gray-900">{title}</h3>
                    <Status labs={labs} />
                </div>
            </a>
        </Link>
    )
}

export default Class
