import Testcase from '../Testcase'
import Markdown from './Markdown'

function Loaded() {
    return (
        <>
            <div>
                <h1 className="text-xl font-bold dark:text-[#E0E2E8]">
                    09 Find a, b in which a*b=n and (a+b) is the lowest
                </h1>

                {/* Test case */}
                <Testcase status={[]} />
                <Markdown />
            </div>
        </>
    )
}

export default Loaded
