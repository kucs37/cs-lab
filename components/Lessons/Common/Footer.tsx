import { useLessonCTX } from '@/Context/Lessons'

function Footer() {
    const { lessonQuizzes, setLessonQuizzes } = useLessonCTX()

    const handleSubmitAnswer = () => {
        console.log(lessonQuizzes)
    }

    const clearAnswers = () => {
        setLessonQuizzes([])
    }
    return (
        <div className="flex justify-between items-center">
            <button
                className="bg-gray-900 text-white w-1/4 py-2 rounded-lg shadow-md hover:bg-gray-700"
                onClick={handleSubmitAnswer}
            >
                ส่ง
            </button>
            <button className="" onClick={clearAnswers}>
                ล้างคำตอบ
            </button>
        </div>
    )
}

export default Footer
