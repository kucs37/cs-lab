import {
    StateCommand,
    EditorState,
    countColumn,
    Line,
    ChangeSet,
    ChangeSpec,
    EditorSelection,
    SelectionRange,
} from '@codemirror/state'
import { indentMore } from '@codemirror/commands'
import { indentString } from '@codemirror/language'

function changeBySelectedLine(
    state: EditorState,
    f: (line: Line, changes: ChangeSet[], range: SelectionRange) => void
) {
    let atLine = -1
    return state.changeByRange((range) => {
        let changes: ChangeSet[] = []
        for (let pos = range.from; pos <= range.to; ) {
            let line = state.doc.lineAt(pos)
            if (line.number > atLine && (range.empty || range.to > line.from)) {
                f(line, changes, range)
                atLine = line.number
            }
            pos = line.to + 1
        }
        let changeSet = state.changes(changes)
        return {
            changes,
            range: EditorSelection.range(
                changeSet.mapPos(range.anchor, 1),
                changeSet.mapPos(range.head, 1)
            ),
        }
    })
}

export const indentWithTab: StateCommand = ({ state, dispatch }) => {
    const indent = Array(state.facet(EditorState.tabSize)).fill(' ').join('')
    if (state.selection.ranges.some((r) => !r.empty))
        return indentMore({ state, dispatch })
    dispatch(
        state.update(
            state.replaceSelection(indent),
            { userEvent: 'indent' }
        )
    )
    return true
}

export const indentWithTabLess: StateCommand = ({ state, dispatch }) => {
    if (state.readOnly) return false
    console.log(state.facet(EditorState.tabSize))

    dispatch(
        state.update(
            changeBySelectedLine(state, (line: Line, changes: ChangeSpec[]) => {
                let space = /^\s*/.exec(line.text)![0]
                if (!space) return
                let col = countColumn(space, state.tabSize),
                    keep = 0
                let insert = indentString(
                    state,
                    Math.max(0, col - state.facet(EditorState.tabSize))
                )
                while (
                    keep < space.length &&
                    keep < insert.length &&
                    space.charCodeAt(keep) == insert.charCodeAt(keep)
                )
                    keep++
                changes.push({
                    from: line.from + keep,
                    to: line.from + space.length,
                    insert: insert.slice(keep),
                })
            }),
            { userEvent: 'delete.dedent' }
        )
    )
    return true
}
