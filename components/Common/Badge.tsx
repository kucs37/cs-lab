interface BadgeProps {
    title: string
    backgroundColor: string
    color: string
}

function Badge({ title, backgroundColor, color }: BadgeProps) {
    return (
        <div
            className="rounded-full px-2 py-1 bg-${color}-200 w-fit not-prose"
            style={{ backgroundColor }}
        >
            <p className="text-sm font-bold" style={{ color }}>
                {title}
            </p>
        </div>
    )
}

export default Badge
