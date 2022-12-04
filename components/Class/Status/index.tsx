import Lab from '@/interface/Lab'
import clsx from 'clsx'
interface Props {
    labs: Lab[]
}
function Status({ labs }: Props) {
    const successLab = labs.filter((lab) =>
        lab.problems.every(({ status }) => status == 'success')
    ).length

    const allLab = labs.length

    if (allLab === 0) return null
    return (
        <div className="flex flex-col gap-2">
            <div className="w-full grid grid-cols-7 gap-1 place-items-stretch">
                {labs.map(({ problems }, index) => {
                    const isSuccess = problems.every(
                        ({ status }) => status == 'success'
                    )
                    return (
                        <div
                            key={index}
                            className={clsx(
                                'h-2',
                                isSuccess ? 'bg-lime-500 dark:bg-lime-800' : 'bg-gray-200 dark:bg-gray-600',
                                'rounded-full'
                            )}
                        ></div>
                    )
                })}
            </div>
            <h6 className="font-bold text-md dark:text-white">
                {successLab}/{allLab}
            </h6>
        </div>
    )
}

export default Status
