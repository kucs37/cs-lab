interface BadgeProps {
    title: string
    className?: string
}

function Badge({ title, className = '' }: BadgeProps) {
    return (
        <div
            className={`rounded-full px-2 py-1 bg-[#FF708A]/50 w-fit ${className}`}
        >
            <p className="text-sm font-bold text-[#FFDEDF]">{title}</p>
        </div>
    )
}

export default Badge
