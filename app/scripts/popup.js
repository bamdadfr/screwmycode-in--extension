/* eslint-disable no-undef */
const checkbox = document.getElementById ('checkbox')
const fader = document.getElementById ('fader')
const newPercent = document.getElementById ('newPercent')
const newTone = document.getElementById ('newTone')
const sliderBarColor = document.getElementById ('slider-bar-color')
const sliderBarHandle = document.getElementById ('slider-bar-handle')

// prefering 'oninput' instead of 'onchange'
// because 'onchange' updates only when mouse up

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

const animateIndicator = (element) => {

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
        
        animateIndicator (indicator)
    
    }

}

const updateSlider = (value) => {

    const speed = {
        'value': value * 100,
        'min': 50,
        'max': 150,
        'origin': 100,
    }

    const barColor = {
        'size': null,
        'anchorPos': null,
        'anchorOpposite': null,
        'min': 0, // px
        'max': 100, // px
    }

    const barHandle = {
        'pos': null,
        'origin': 92.5 - 1, // 1 px is offset to center the handle visually
        'min': 0, // px
        'max': 185, // px
    }

    // https://github.com/processing/p5.js/blob/master/src/math/calculation.js#L450
    const rangeMap = (n, start1, stop1, start2, stop2) => {

        return (n - start1) / (stop1 - start1) * (stop2 - start2) + start2
    
    }

    if (value === 1) {

        sliderBarColor.style = 'display: none;'

        sliderBarHandle.style = `left: ${barHandle.origin}px;`
    
    } else {

        if (value < 1) {

            barColor.anchorPos = 'right'

            barColor.anchorOpposite = 'left'

            barColor.size = rangeMap (speed.value, speed.min, speed.origin, barColor.max, barColor.min)

            barHandle.pos = rangeMap (speed.value, speed.min, speed.origin, barHandle.min, barHandle.origin)
        
        } else {

            barColor.anchorPos = 'left'

            barColor.anchorOpposite = 'right'

            barColor.size = rangeMap (speed.value, speed.origin, speed.max, barColor.min, barColor.max)

            barHandle.pos = rangeMap (speed.value, speed.origin, speed.max, barHandle.origin, barHandle.max)
        
        }
        
        sliderBarColor.style = `
            ${barColor.anchorPos}: 100px;
            border-${barColor.anchorPos}: 0px solid;
            border-${barColor.anchorOpposite}: ${barColor.size}px solid;
        `

        sliderBarHandle.style = `
            left: ${barHandle.pos}px;
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