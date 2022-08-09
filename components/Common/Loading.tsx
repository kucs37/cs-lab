import { Player } from '@lottiefiles/react-lottie-player'

let list_style: string[] = [
    "https://assets4.lottiefiles.com/packages/lf20_xkbhgbld.json",
    'https://assets1.lottiefiles.com/packages/lf20_bvpvufds.json',
    'https://assets2.lottiefiles.com/packages/lf20_biq74bme.json',
]

function Loading() {
    return (
        <div className="fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col gap-4 justify-center items-center">
            <Player
                autoplay
                loop
                src={list_style[Math.floor(Math.random() * 3)]}
                style={{ height: '200px', width: '200px' }}
            />
            <p className="text-xl font-bold">กำลังโหลด...</p>
        </div>
    )
}

export default Loading
