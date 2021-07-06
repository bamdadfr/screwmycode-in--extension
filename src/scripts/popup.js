import { PopupCheckbox } from './popup-checkbox/popup-checkbox'
import { PopupSlider } from './popup-slider/popup-slider'
import { PopupPercentage } from './popup-percentage/popup-percentage'
import { PopupSemitones } from './popup-semitones/popup-semitones'
import { PopupShare } from './popup-share/popup-share'

/**
 * @function
 * @name PopupOnLoad
 * @description popup: on load
 * @returns {Promise<void>}
 */
async function PopupOnLoad () {

    await PopupCheckbox ()

    await PopupSlider ()

    await PopupPercentage ()

    await PopupSemitones ()

    await PopupShare ()

}

window.addEventListener ('load', PopupOnLoad)