import { Extension } from '@codemirror/state'
import { themesI } from '@interface/Themes'
import { abcdef } from '@uiw/codemirror-theme-abcdef'
import { androidstudio } from '@uiw/codemirror-theme-androidstudio'
import { atomone } from '@uiw/codemirror-theme-atomone'
import { bespin } from '@uiw/codemirror-theme-bespin'
import { darcula } from '@uiw/codemirror-theme-darcula'
import { dracula } from '@uiw/codemirror-theme-dracula'
import { duotoneDark, duotoneLight } from '@uiw/codemirror-theme-duotone'
import { eclipse } from '@uiw/codemirror-theme-eclipse'
import { githubDark, githubLight } from '@uiw/codemirror-theme-github'
import { okaidia } from '@uiw/codemirror-theme-okaidia'
import { sublime } from '@uiw/codemirror-theme-sublime'

interface ThemesI {
    name: themesI
    theme: Extension
}

export const themes: ThemesI[] = [
    {
        name: 'abcdef',
        theme: abcdef,
    },
    {
        name: 'androidstudio',
        theme: androidstudio,
    },
    {
        name: 'atomone',
        theme: atomone,
    },
    {
        name: 'bespin',
        theme: bespin,
    },
    {
        name: 'darcula',
        theme: darcula,
    },

    {
        name: 'dracula',
        theme: dracula,
    },
    {
        name: 'duotoneDark',
        theme: duotoneDark,
    },
    {
        name: 'duotoneLight',
        theme: duotoneLight,
    },
    {
        name: 'eclipse',
        theme: eclipse,
    },

    {
        name: 'githubDark',
        theme: githubDark,
    },

    {
        name: 'githubLight',
        theme: githubLight,
    },
    {
        name: 'okaidia',
        theme: okaidia,
    },
    {
        name: 'sublime',
        theme: sublime,
    },
]

export default function Theme(theme: themesI) {
    return themes.find(({ name }) => name === theme)?.theme
}
