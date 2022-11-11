import Settings from './Settings'
import Back from './Back'
function Buttons() {
    return (
        <div className="border-r-1 flex flex-col justify-between">
            <Back />
            <Settings />
        </div>
    )
}

export default Buttons
