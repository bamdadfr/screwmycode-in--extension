/* eslint-disable no-undef */
const checkbox = document.getElementById ('checkbox')
const fader = document.getElementById ('fader')
const newPercent = document.getElementById ('newPercent')
const newTone = document.getElementById ('newTone')
const sliderBarColor = document.getElementById ('slider-bar-color')
const sliderBarHandle = document.getElementById ('slider-bar-handle')

// prefering 'oninput' instead of 'onchange'
// because 'onchange' updated only when mouse up

// listen on checkbox input
checkbox.oninput = async (e) => {

    const storage = await browser.storage.local.get ()
    
    await browser.storage.local.set ({
        ...storage,
        'isActive': e.target.checked,
    })     
    
}    

// listen on fader input
fader.oninput = async (e) => {
    
    const storage = await browser.storage.local.get ()

    await browser.storage.local.set ({
        ...storage,
        'speed': e.target.value,
    })     

}    

const computePercentValue = (speed) => {

    return (speed * 100 - 100).toFixed (0) + ' %'

}

const computeToneValue = (speed) => {

    return (12 * (Math.log (speed) / Math.log (2))).toFixed (1) + ' st'

}

const animateElement = (element) => {

    element.style = 'color: #054570; background: #63BCF8;'

    setTimeout (() => {

        element.style = ''
    
    }, 500)

}

const updateIndicator = (type, indicator, value, noAnimation) => {

    if (type === 'percent') {

        indicator.textContent = computePercentValue (value)
        
    } else if (type === 'tone') {
        
        indicator.textContent = computeToneValue (value)
        
    }

    if (!noAnimation) {
        
        animateElement (indicator)
    
    }

}

const updateSlider = (value) => {

    let anchorPos = null
    let anchorOpposite = null
    let barSize = null
    let barHandlePos = null
    const barHandleOrigin = 92.5 - 1

    if (value === 1) {

        sliderBarColor.style = 'display: none;'

        sliderBarHandle.style = `left: ${barHandleOrigin}px;`
    
    } else {

        if (value < 1) {

            anchorPos = 'right'

            anchorOpposite = 'left'

            // returns 0 to 100 px
            barSize = Math.abs (value * 100 * 2 - 200)

            // dans les poucentages NEGATIFS
            // v = valeur d'entrée (vitesse)
            // r = valeur de sortie (position handle)

            // vmin 50 => rmin 0
            // vmax 100 => rmax 92.5
            
            // returns 0 to 92.5 px
            barHandlePos = ((value * 100) - 50) * (barHandleOrigin / 50)
        
        } else {

            anchorPos = 'left'

            anchorOpposite = 'right'

            // returns 0 to 100 px
            barSize = (value * 100 * 2 - 200)

            // dans les pourcentages POSITIFS
            // v = valeur d'entrée (vitesse)
            // r = valeur de sortie (position handle)

            // vmin 100 => rmin 92.5
            // vmax 150 => rmax 185

            // returns 92.5 to 185 px
            barHandlePos = (value * 100) * (185 / 100) - barHandleOrigin
        
        }
        
        sliderBarColor.style = `
            ${anchorPos}: 100px;
            border-${anchorPos}: 0px solid;
            border-${anchorOpposite}: ${barSize}px solid;
        `

        // 50 = 0
        // 150 = 185

        sliderBarHandle.style = `
            left: ${barHandlePos}px;
        `
    
    }

}

// listen on browser storage and change percent and tone value
browser.storage.onChanged.addListener ((changes) => {

    const isActive = changes.isActive.newValue

    if (isActive === false) {

        updateIndicator ('percent', newPercent, 1, true)

        updateIndicator ('tone', newTone, 1, true)

        updateSlider (1)
        
    } else {
        
        const speed = changes.speed.newValue
        
        updateIndicator ('percent', newPercent, speed)
        
        updateIndicator ('tone', newTone, speed)

        updateSlider (speed)
        
    }

})

const init = async () => {

    // add if not set value (first init)

    const storage = await browser.storage.local.get ()
    
    checkbox.checked = storage.isActive

    if (storage.isActive) {

        fader.value = storage.speed
            
        updateIndicator ('percent', newPercent, storage.speed, true)
        
        updateIndicator ('tone', newTone, storage.speed, true)
        
        updateSlider (storage.speed)
    
    } else {
        
        fader.value = 1
        
        updateIndicator ('percent', newPercent, 1, true)
        
        updateIndicator ('tone', newTone, 1, true)
        
        updateSlider (1)
    
    }

}

// eslint-disable-next-line no-console
init ().catch (err => console.error (err))