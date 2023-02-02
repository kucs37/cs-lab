import React, { useEffect, useRef, useState } from 'react'
import Item from '@/components/Lessons/Outline/Item'
import { fakeLabs } from '@/__mock__'
import { motion, AnimatePresence } from 'framer-motion'
import { BsArrowBarLeft, BsArrowBarRight } from 'react-icons/bs'
import clsx from 'clsx'

function Navigation() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <motion.div
            animate={{ width: isOpen ? 300 : 50 }}
            className="mr-4 h-full bg-white dark:bg-secondary-1 border dark:border-secondary-2 rounded-xl overflow-hidden relative"
        >
            <motion.div
                transition={{ delay: isOpen ? 0.3 : 0 , duration : 0.3 }}
                animate={{
                    display: isOpen ? 'block' : 'none',
                    opacity: isOpen ? 1 : 0,
                }}
                className="p-2"
            >
                {fakeLabs[0].problems.map(({ name, status }, i) => (
                    <Item
                        key={name}
                        name={name}
                        status={status}
                        active={i === 0}
                    />
                ))}
            </motion.div>
            <div
                className={clsx(
                    'absolute bottom-2  border-t w-full flex  px-2 pt-2',
                    isOpen && 'justify-end',
                    !isOpen && 'justify-center'
                )}
            >
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={clsx('text-xl border p-2 rounded-xl')}
                >
                    {isOpen ? <BsArrowBarLeft /> : <BsArrowBarRight />}
                </button>
            </div>
        </motion.div>
    )
}

export default Navigation
