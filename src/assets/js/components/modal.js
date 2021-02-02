import { getScrollBarWidth } from './scrollBarWidth'
import { radioButtons } from './radioButtons'

export const modal = ({ window, container, active, open, close, radio, title, success }) => {

    document.addEventListener('click', event => {

        // Open
        // ====
        if (event.target.closest(`.${open}`)) {

            event.preventDefault()

            let currentID, currentMODAL, currentCONTAINER, currentCONTENT, currentTARGET, currentPRICE, currentTITLE, currentRADIO

            // Сохранили элемент на котором кликнули
            // =====================================
            currentTARGET = event.target.closest(`.${open}`)

            // Определили тип вызываемого окна
            // ===============================
            currentCONTENT = currentTARGET.dataset.content

            // Забрала значение заголовка для текущего окна
            // ===========================================
            currentTITLE = currentTARGET.dataset.title

            // Забрали из нашего элемента значение атрибута href без #
            // =======================================================
            currentID = currentTARGET.getAttribute('href').replace('#', '')

            // Нашли в документе элемент с currentID
            // =====================================
            currentMODAL = document.getElementById(currentID)

            // Нашли в currentMODAL контейнер с содержимым
            // ===========================================
            currentCONTAINER = currentMODAL.querySelector(`.${container}`)

            // Нашли в currentMODAL контейнер для радио кнопок
            // ===============================================
            currentRADIO = currentMODAL.querySelector(`.${radio}`)

            switch (currentCONTENT) {

                // FORM
                // ====
                case 'form-price':

										// Срочку с адрес href по значению полученно ID
				            // ============================================
										currentID = currentTARGET.getAttribute('href').replace('#', '')

										// Находим модальное окно соответствующее адресу currentID
				            // =======================================================
										currentMODAL = document.getElementById(currentID)

										// Забираем содержимое атрибута data-price и переводим в виде объета
				            // =================================================================
										currentPRICE = JSON.parse(currentTARGET.dataset.price)[0]

										// Вставляем в окно формы radio кнопки, передав в них даные из currentPRICE
                    // ========================================================================
                    let radioHTML = radioButtons(currentPRICE)
                    currentRADIO.innerHTML = radioHTML

                    break;

                // VIDEO
                // =====
                case 'video':
                    // Получили url ролика
                    // ===================
                    let url = currentTARGET.dataset.url

                    // Создали iframe с текущим url
                    // ============================
                    let videoFrame = `<iframe src="${url}" frameborder="0" allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope;  picture-in-picture" allowfullscreen></iframe>`

                    // Создали ребёнка с соответствующим классом и помести в него iframe
                    // =================================================================
                    let video = document.createElement('div')
                    video.classList.add('modal__video')
                    video.innerHTML = videoFrame

                    // Вставили готовый блок в родителя
                    // ================================
                    currentCONTAINER.appendChild(video)
                    break;

                default:
                    break;
            }

            // Компенсировали правый отступ при отключении скролл бара
            // =======================================================
            document.body.style.paggingRight = `${getScrollBarWidth()}px`
            document.body.style.overflow = 'hidden'

            // Вставляем в форму соответствующий заголовок
            // ===========================================
            document.querySelector(`.${title}`).innerHTML = currentTITLE

            // Показываем окно с формой
            // ========================
            currentMODAL.classList.add(active)

        }

        // Close
        // =====
        if (event.target.closest(`.${close}`) || event.target.classList.contains(`${container}`)) {

            // Если в окне видео, то удалили его при закрытии, чтобы не оставлять в DOM
            // ========================================================================
            let video = event.target.closest(`.${window}`).querySelector('.modal__video')
            if (video) { video.remove() }

            // Если форма, то просто прячем окно
            // =================================
            event.target.closest(`.${window}`).classList.remove(active)

            // Вернули скролл бар на место
            // ===========================
            document.body.style.overflow = 'auto'

            // Удалили содержимое блока радио кнопок
            // =====================================
            document.querySelector(`.${radio}`).innerHTML = ''

            // Скрыли блок с сообщением об успешной отправке
            // =============================================
            document.querySelector(`.${success}`).classList.remove('--active')
        }
    })
}