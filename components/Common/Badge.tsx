interface BadgeProps {
    title: string
    color: string
}

function Badge({ title, color }: BadgeProps) {
    return (
        <div className={`rounded-full px-2 py-1 bg-${color}-200 w-fit not-prose`}>
            <p className={`text-sm text-${color}-500 font-bold`}>{title}</p>
        </div>
    )
}

export default Badge
