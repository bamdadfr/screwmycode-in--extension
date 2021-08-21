import { handleCheckbox } from './popup/handle-checkbox'
import { handleSlider } from './popup/handle-slider'
import { handlePercentage } from './popup/handle-percentage'
import { handleSemitones } from './popup/handle-semitones'
import { handleShare } from './popup/handle-share'
import { handleStep } from './popup/handle-step'

window.addEventListener ('load', async () => {

    await handleCheckbox ()

    await handleSlider ()

    await handlePercentage ()

    await handleSemitones ()

    await handleShare ()

    await handleStep ()

})