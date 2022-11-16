function Loading() {
    return (
        <>
            <div className="flex flex-col gap-4 duration-75">
                <div className="w-3/4 h-7 bg-gray-200 rounded-lg animate-pulse"></div>

                <div className="w-full h-4 bg-gray-200 rounded-lg animate-pulse"></div>
                <div className="w-full h-4 bg-gray-200 rounded-lg animate-pulse"></div>
                <div className="w-full h-4 bg-gray-200 rounded-lg animate-pulse"></div>
                <div className="w-3/4 h-4 bg-gray-200 rounded-lg animate-pulse"></div>
                <div className="w-full h-48 bg-gray-200 rounded-lg animate-pulse"></div>
            </div>
        </>
    )
}

export default Loading
