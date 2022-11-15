import React from 'react'
import Item from './Item'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'

function HistoryItems(): JSX.Element {
    const allHistory = useSelector(
        (state: RootState) => state.history.allHistory
    )
    return (
        <>
            {allHistory.map((item, _) => (
                <Item key={item.date.getTime()} {...item} />
            ))}
        </>
    )
}

export default HistoryItems
