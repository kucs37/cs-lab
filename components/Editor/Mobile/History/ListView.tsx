import HistoryItems from '../../History/HistoryItem'

function ListView() {
    return (
        <div className="flex flex-col gap-4 mt-4">
            <HistoryItems
                allHistory={[
                    {
                        code: '',
                        date: new Date('November 16, 2565 11:12:00').getTime(),
                        status: ['-', '-', '-', 'S', 'C', '-', '-'],
                    },
                    {
                        code: 'Hello World',
                        date: new Date('November 16, 2565 11:12:01').getTime(),
                        status: ['P', 'P', 'P', 'S', 'C', 'P', 'P'],
                    },
                ]}
            />
        </div>
    )
}

export default ListView
