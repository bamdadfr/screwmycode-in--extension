import Slider from './classes/slider'
import Indicator from './classes/indicator'
import Checkbox from './classes/checkbox'
import { getBrowser, setState, getState } from './functions/browser'

const checkbox = new Checkbox (document.getElementById ('checkbox'))
const slider = new Slider (document.getElementsByClassName ('slider')[0])
const percent = new Indicator ('percent', document.getElementById ('newPercent'))
const tone = new Indicator ('tone', document.getElementById ('newTone'))

const view = (active, speed) => {

    switch (active) {

        case true:
            checkbox.enable ()

            percent.update (speed)

            tone.update (speed)

            slider.update (speed)

            break

        default:
            checkbox.disable ()

            percent.disable ()

            tone.disable ()

            slider.disable ()
    
    }

}

getBrowser ().storage.onChanged.addListener ((changes) => {

    const isActive = changes.isActive.newValue
    const speed = changes.speed.newValue

    view (isActive, speed)

})

const onMouseWheel = () => {

    document.addEventListener ('wheel', async (e) => {

        const storage = await getState ()
        const delta = -1 * e.deltaY / (100 * 7)
        const newSpeed = parseFloat (storage.speed) + delta

        setState ('speed', newSpeed)

    })

}

const init = async () => {

    const storage = await getState ()

    onMouseWheel ()
    
    view (storage.isActive, storage.speed)

}

// eslint-disable-next-line no-console
init ().catch (err => console.error (err))