function Header() {
    return (
        <div className="my-6">
            <div className="flex items-center gap-2">
                <div className="rounded-full px-2 py-1 bg-gray-200 w-fit">
                    <p className="text-sm text-gray-500 font-bold">CS112</p>
                </div>
                <div className="rounded-full px-2 py-1 bg-gray-200 w-fit">
                    <p className="text-sm text-gray-500 font-bold">หมู่ 11</p>
                </div>
            </div>
            <h3 className="font-bold text-xl my-2">
                Fundamental Programming Concepts
            </h3>
        </div>
    )
}

export default Header
