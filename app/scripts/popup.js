import Slider from './classes/slider'
import Indicator from './classes/indicator'
import Checkbox from './classes/checkbox'
import { getBrowser, setState, getState } from './functions/browser'
import { init as colorsInit } from './config/colors'

const checkbox = new Checkbox (document.getElementById ('checkbox'))
const slider = new Slider (document.getElementsByClassName ('slider')[0])
const percent = new Indicator ('percent', document.getElementById ('newPercent'))
const tone = new Indicator ('tone', document.getElementById ('newTone'))

const initView = (active, speed) => {

    if (active === true) {

        checkbox.enable ()
        
        percent.update (speed)

        tone.update (speed)

        slider.update (speed)

    } else {

        checkbox.disable ()

        percent.disable ()
        
        tone.disable ()
        
        slider.disable ()

    }

}

getBrowser ().storage.onChanged.addListener ((changes) => {

    const isActive = changes.isActive.newValue
    const speed = changes.speed.newValue

    initView (isActive, speed)

})

const setEventMouseWheel = () => {

    document.addEventListener ('wheel', async (e) => {

        const storage = await getState ()
        const delta = -1 * e.deltaY / (100 * 8)
        const newSpeed = parseFloat (storage.speed) + delta

        setState ('speed', newSpeed)

    })

}

const init = async () => {

    const storage = await getState ()

    setEventMouseWheel ()
    
    initView (storage.isActive, storage.speed)

}

// eslint-disable-next-line no-console
init ().catch (err => console.error (err))