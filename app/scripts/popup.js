/* eslint-disable no-undef */
import Slider from './classes/slider'
import Indicator from './classes/indicator'

const checkbox = document.getElementById ('checkbox')
const slider = new Slider (document.getElementsByClassName ('slider')[0], browser)
const percent = new Indicator ('percent', document.getElementById ('newPercent'))
const tone = new Indicator ('tone', document.getElementById ('newTone'))

checkbox.oninput = async (e) => {

    const storage = await browser.storage.local.get ()
    
    await browser.storage.local.set ({
        ...storage,
        'isActive': e.target.checked,
    })

    if (e.target.checked) {

        slider.enable ()
    
    } else {

        slider.disable ()
    
    }
    
}    

// listen on browser storage and change percent and tone value
browser.storage.onChanged.addListener ((changes) => {
    
    const isActive = changes.isActive.newValue
    const valueOrNotActive = () => isActive ? changes.speed.newValue : 1

    if (isActive === false) {

        percent.disable ()

        tone.disable ()

        slider.disable ()
    
    } else {

        percent.update (valueOrNotActive ())

        tone.update (valueOrNotActive ())

        slider.update (changes.speed.newValue)

    }

})

const init = async () => {

    // html mousewheel
    document.addEventListener ('wheel', async (e) => {

        const storage = await browser.storage.local.get ()
        const delta = -1 * e.deltaY / (100 * 8)
        const newSpeed = parseFloat (storage.speed) + delta

        if (newSpeed < 0.5) {

            await browser.storage.local.set ({
                ...storage,
                'speed': 0.5,
            })

        } else if (newSpeed > 1.5) {

            await browser.storage.local.set ({
                ...storage,
                'speed': 1.5,
            })

        } else {

            await browser.storage.local.set ({
                ...storage,
                'speed': newSpeed,
            })

        }

    })

    const storage = await browser.storage.local.get ()

    if (typeof storage.speed === 'undefined') {

        await browser.storage.local.set ({
            ...storage,
            'speed': 1,
        })

    }
    
    if (storage.isActive === false || typeof storage.isActive === 'undefined') {

        checkbox.checked = false
        
        percent.disable ()
        
        tone.disable ()
        
        slider.disable ()
        
    } else {
        
        checkbox.checked = storage.isActive

        percent.update (storage.speed)

        tone.update (storage.speed)

        slider.update (storage.speed)
    
    }

}

// eslint-disable-next-line no-console
init ().catch (err => console.error (err))