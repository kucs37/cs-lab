import { ReactNode, useState, useEffect } from 'react'
import ReactTooltip from 'react-tooltip'

interface Props {
    icon: ReactNode
    onClick: () => void
    tooltip?: string
}

function Button({ icon, onClick, tooltip }: Props) {
    const [isMounted, setIsMounted] = useState<boolean>(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])
    return (
        <>
            {isMounted && (
                <ReactTooltip
                    place="bottom"
                    type="dark"
                    effect="solid"
                    delayShow={500}
                />
            )}

            <button
                data-tip={tooltip}
                className="h-fit m-2 px-10 py-2 rounded-lg shadow-md bg-gray-200 dark:bg-[#706E6E] border-b-4 active:border-b-2 transition-all duration-50 border-gray-300 dark:border-[#494949] text-gray-800 dark:text-[#E0E2E8]"
                onClick={onClick}
            >
                {icon}
            </button>
        </>
    )
}

export default Button
