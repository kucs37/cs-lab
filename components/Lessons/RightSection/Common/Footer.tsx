function Footer() {
    const handleSubmitAnswer = () => {}

    const clearAnswers = () => {}
    return (
        <div className="flex justify-between items-center mt-10 h-24">
            <button
                className="bg-gray-800 border-b-4 active:border-b-2 transition-all duration-50 border-gray-700 text-white   w-1/4 py-2 rounded-lg shadow-md"
                onClick={handleSubmitAnswer}
            >
                ส่ง
            </button>
            <button className="text-red-500 rounded-lg border-2 border-red-400 px-4 py-2" onClick={clearAnswers}>
                ล้างคำตอบ
            </button>
        </div>
    )
}

export default Footer
