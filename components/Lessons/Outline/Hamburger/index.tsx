import { Fragment } from 'react'
import { fakeLabs } from '@/fakeData'
import Item from '../Item'
import ScrollSpy from 'react-scrollspy'
import { OutlineI } from '@/interface/Outline'
import { useAppDispatch } from '@/store/hooks'
import { toggleHamburger } from '@/store/slices/menuSlice'
interface Props {
    outline: OutlineI[]
}
function Hamburger({ outline }: Props) {
    const dispatch = useAppDispatch()
    return (
        <div className="flex flex-col gap-3 p-4">
            {fakeLabs[0].problems.map(({ name, status }, index) => (
                <Fragment key={name}>
                    <Item name={name} status={status} active={index === 0} />
                    {index === 0 ? (
                        <ScrollSpy
                            className="w-full border-l-2 border-gray-200 pb-3 pl-2 text-gray-300 text-sm leading-loose"
                            items={outline.map(({ id }) => id)}
                            currentClassName="text-gray-900 font-semibold"
                            scrolledPastClassName="text-gray-400"
                        >
                            {outline.map(({ id, name }) => (
                                <li
                                    key={id}
                                    onClick={() => dispatch(toggleHamburger())}
                                >
                                    <a href={`#${id}`}>{name}</a>
                                </li>
                            ))}
                        </ScrollSpy>
                    ) : null}
                </Fragment>
            ))}
        </div>
    )
}

export default Hamburger
