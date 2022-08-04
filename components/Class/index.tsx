import Link from 'next/link'
function Index() {
    return (
        <Link href="class/cs112">
            <a className="col-span-12 md:col-span-6 xl:col-span-4">
                <div className="rounded-lg border-[1px] bg-white border-gray-50 w-full px-6 py-4 shadow-sm flex flex-col gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                        <div className="rounded-full px-2 py-1 bg-gray-200 w-fit">
                            <p className="text-sm text-gray-500 font-bold">
                                CS112
                            </p>
                        </div>
                        <div className="rounded-full px-2 py-1 bg-gray-200 w-fit">
                            <p className="text-sm text-gray-500 font-bold">
                                หมู่ 11
                            </p>
                        </div>
                    </div>
                    <h3 className="font-bold text-lg text-gray-900">
                        Fundamental Programming Concepts
                    </h3>

                    <div className="flex flex-col gap-2">
                        <div className="w-full grid grid-cols-7 gap-1 place-items-stretch">
                            <div className="h-2 bg-lime-500 rounded-full"></div>
                            <div className="h-2 bg-lime-500 rounded-full"></div>
                            <div className="h-2 bg-lime-500 rounded-full"></div>
                            <div className="h-2 bg-lime-500 rounded-full"></div>
                            <div className="h-2 bg-gray-200 rounded-full"></div>
                        </div>
                        <h6 className="font-bold text-md">4/5</h6>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default Index
