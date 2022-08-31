import Section from '@/components/Class/Section'
interface HeaderI {
    className: string
}
function Header({ className }: HeaderI) {
    return (
        <div className="my-6">
            <Section code="cs112" section={11} />

            <h3 className="font-bold text-xl my-2">{className}</h3>
        </div>
    )
}

export default Header
