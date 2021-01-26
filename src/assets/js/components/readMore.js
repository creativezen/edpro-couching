import $ from 'jquery'

export const readMore = ({ button, content, text }) => {

    const story_array = document.querySelectorAll(`.${text}`)

    if (story_array.length !== 0) {

        hideStoryes(story_array)

        document.addEventListener('click', event => {

            if (event.target.closest(`.${content}`) && event.target.classList.contains(`${button}`)) {

                let currentContent = event.target.closest(`.${content}`)
                let currentText = currentContent.querySelector(`.${text}`)
                let autoHeight = getAutoHeight(currentText)

                !event.target.classList.contains('--active')
                    ? switchState(currentText, autoHeight, event.target)
                    : switchState(currentText, 200, event.target)
            }
        })
    }



    function hideStoryes(storyes) {
        storyes.forEach(item => {
            $(item).css('height', '200px')
        })
    }

    function getAutoHeight(curtext) {
        return $(curtext).css('height','auto').height()
    }

    function switchState(curtext, autoheight, btn) {
        $(curtext).animate({ height: autoheight }, switchClass(curtext, btn))

    }

    function switchClass(element, btn) {
        if (!$(element).hasClass('content--active')) {
            $(element).addClass('content--active')
            $(btn).addClass('--active')
            $(btn).html('Скрыть')
        }
        else if ($(element).hasClass('content--active')) {
            $(element).removeClass('content--active')
            $(btn).removeClass('--active')
            $(btn).html('Читать полностью')
        }
    }
}