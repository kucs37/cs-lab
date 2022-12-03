import { ReactNode, useRef } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoClose } from 'react-icons/io5'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { toggleHamburger } from '@/store/slices/menuSlice'
import { useOnClickOutside } from 'usehooks-ts'
interface Props {
    children?: ReactNode
}
function Hamburger({ children }: Props) {
    const overlayRef = useRef<HTMLDivElement>(null)
    const isHamburgerOpen = useAppSelector(
        (state) => state.menu.isHamburgerOpen
    )

    const dispatch = useAppDispatch()

    useOnClickOutside(overlayRef, () => dispatch(toggleHamburger()))

    return (
        <div className="md:hidden">
            <button onClick={() => dispatch(toggleHamburger())}>
                <RxHamburgerMenu size={28} />
            </button>

            {isHamburgerOpen ? (
                <div className="fixed z-50 top-0 left-0  w-full h-full bg-black bg-opacity-40">
                    <div ref={overlayRef} className="w-9/12 h-full bg-white">
                        <button
                            onClick={() => dispatch(toggleHamburger())}
                            className="w-full p-4 border-b flex justify-end items-center"
                        >
                            <IoClose size={26} />
                        </button>
                        <div className="h-full overflow-y-scroll">{children}</div>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default Hamburger
