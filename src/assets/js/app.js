import { modal } from './components/modal'
import { scroll } from './components/scroll'
import { tabs } from './components/tabs'
import { readMore } from './components/readMore'
import { faq } from './components/faq'
import { tooltip } from './components/tooltip'


document.addEventListener('DOMContentLoaded', () => {

    const ELEMENT = {

        MODAL: {
            window: 'js-modal',
            container: 'js-modal-container',
            active: 'modal--active',
            open: 'js-modal-open',
            close: 'js-modal-close'
        },

        SCROLL: {
            link: 'js-scroll'
        },

        TABS: {
            item: 'js-tabs__item',
            content: 'js-tabs-content',
            active: 'tabs__item--active'
        },

        READ: {
            button: 'js-read-more',
            content: 'js-story',
            text: 'js-story-text'
        },

        FAQ: {
            container: 'js-faq',
            item: 'js-faq-item',
            text: 'js-faq-item__text',
            active: 'faq__item--active'
        },

        TOOLTIP: {
            item: 'js-tippy'
        }
    }

    modal(ELEMENT.MODAL)
    scroll(ELEMENT.SCROLL)
    tabs(ELEMENT.TABS)
    readMore(ELEMENT.READ)
    faq(ELEMENT.FAQ)
    tooltip(ELEMENT.TOOLTIP)

})