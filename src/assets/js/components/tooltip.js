import tippy from 'tippy.js'
import {roundArrow} from 'tippy.js'

export const tooltip = ({ item }) => {

    const element = document.querySelectorAll(`.${item}`)

    tippy(element, {
        theme: 'light',
        arrow: roundArrow,
        animation: 'fade'
    })
}