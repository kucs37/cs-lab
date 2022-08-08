import { Player } from '@lottiefiles/react-lottie-player'

function Loading() {
    return (
        <div className="fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col gap-4 justify-center items-center">
            <Player
                autoplay
                loop
                src="https://assets4.lottiefiles.com/packages/lf20_xkbhgbld.json"
                style={{ height: '200px', width: '200px' }}
            />
            <p className='text-lg'>กำลังโหลด...</p>
        </div>
    )
}

export default Loading
