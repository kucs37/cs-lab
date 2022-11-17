import React from 'react'
import Item from './Item'
import type { HistoryI } from '@/interface/History'

interface Props {
    allHistory: HistoryI[]
}
function HistoryItems({ allHistory }: Props): JSX.Element {
    return (
        <>
            {allHistory.map((item, _) => (
                <Item key={new Date(item.date).getTime()} {...item} />
            ))}
        </>
    )
}

export default HistoryItems
