import Settings from './Settings'
import Back from './Back'
import History from './History'
function Buttons() {
    return (
        <div className="border-r-1 flex flex-col justify-between">
            <div className='flex flex-col'>
                <Back />
                <History />
            </div>
            <Settings />
        </div>
    )
}

export default Buttons
