const SaveStatus = ({ status = 'saved' }: { status: 'saved' | 'saving' }) => {
    if (status == 'saving') {
        return (
            <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2 animate-pulse"></div>
                <span className="text-xs">กำลังเซฟ</span>
            </div>
        )
    }

    return (
        <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-lime-500 mr-2"></div>
            <span className="text-xs">เซฟแล้ว</span>
        </div>
    )
}
export default SaveStatus
