import { fakeLabs } from '@/__mock__'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { BsArrowBarLeft, BsArrowBarRight } from 'react-icons/bs'
import Item from './Item'

function Sidebar() {
    const [isOpen, setIsOpen] = useState(true)
    return (
        <motion.div
            animate={{ left: isOpen ? 0 : -345 }}
            transition={{ duration: 0.4 }}
            className="mt-16 left-0 fixed bg-white border-r h-full z-30"
        >
            <div className="relative h-full">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="absolute bg-white border-r border-t border-b rounded-r-full bottom-24 -right-[2.3rem] p-2 text-xl"
                >
                    {isOpen ? <BsArrowBarLeft /> : <BsArrowBarRight />}
                </button>
                <div className="p-4">
                    {fakeLabs[0].problems.map(({ name, status }, i) => (
                        <Item
                            key={name}
                            name={name}
                            status={status}
                            active={i === 0}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default Sidebar
