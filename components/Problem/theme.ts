import { Extension } from '@codemirror/state'
import { themesI } from '@/interface/Themes'
import { abcdef } from '@uiw/codemirror-theme-abcdef'
import { androidstudio } from '@uiw/codemirror-theme-androidstudio'
import { atomone } from '@uiw/codemirror-theme-atomone'
import { darcula } from '@uiw/codemirror-theme-darcula'
import { duotoneDark, duotoneLight } from '@uiw/codemirror-theme-duotone'
import { eclipse } from '@uiw/codemirror-theme-eclipse'
import { githubDark, githubLight } from '@uiw/codemirror-theme-github'
import { okaidia } from '@uiw/codemirror-theme-okaidia'
import { sublime } from '@uiw/codemirror-theme-sublime'
import { oneDark } from '@/editorTheme/one-dark'
import { aura } from '@/editorTheme/aura'
import { materialDark } from '@/editorTheme/material-dark'
import { materialLight } from '@/editorTheme/material-light'
import { solarizedDark } from '@/editorTheme/solarized-dark'

import {
    amy,
    ayuLight,
    barf,
    bespin,
    birdsOfParadise,
    boysAndGirls,
    clouds,
    cobalt,
    coolGlow,
    dracula,
    espresso,
    noctisLilac,
    rosePineDawn,
    smoothy,
    solarizedLight,
    tomorrow,
} from 'thememirror'

interface ThemesI {
    name: themesI
    theme: Extension
}

export const themes: ThemesI[] = [
    { name: 'abcdef', theme: abcdef },
    { name: 'androidstudio', theme: androidstudio },
    { name: 'atomone', theme: atomone },
    { name: 'bespin', theme: bespin },
    { name: 'darcula', theme: darcula },
    { name: 'dracula', theme: dracula },
    { name: 'duotoneDark', theme: duotoneDark },
    { name: 'duotoneLight', theme: duotoneLight },
    { name: 'eclipse', theme: eclipse },
    { name: 'githubDark', theme: githubDark },
    { name: 'githubLight', theme: githubLight },
    { name: 'okaidia', theme: okaidia },
    { name: 'sublime', theme: sublime },
    { name: 'onedark', theme: oneDark },
    { name: 'aura', theme: aura },
    { name: 'material-dark', theme: materialDark },
    { name: 'material-light', theme: materialLight },
    { name: 'solarized-dark', theme: solarizedDark },
    { name: 'solarized-light', theme: solarizedLight },
    { name: 'amy', theme: amy },
    { name: 'ayu-light', theme: ayuLight },
    { name: 'barf', theme: barf },
    { name: 'birds-of-paradise', theme: birdsOfParadise },
    { name: 'boys-and-girls', theme: boysAndGirls },
    { name: 'clouds', theme: clouds },
    { name: 'cobalt', theme: cobalt },
    { name: 'cool-glow', theme: coolGlow },
    { name: 'espresso', theme: espresso },
    { name: 'noctis-lilac', theme: noctisLilac },
    { name: 'rose-pine-dawn', theme: rosePineDawn },
    { name: 'smoothy', theme: smoothy },
    { name: 'tomorrow', theme: tomorrow },
].sort((a, b) => a.name.localeCompare(b.name)) as ThemesI[]

export default function Theme(theme: themesI) {
    return themes.find(({ name }) => name === theme)?.theme
}
