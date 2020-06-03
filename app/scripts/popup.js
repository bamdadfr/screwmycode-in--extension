/* eslint-disable no-undef */
const checkbox = document.getElementById ('checkbox')
const slider = document.getElementsByClassName ('slider')[0]
const newPercent = document.getElementById ('newPercent')
const newTone = document.getElementById ('newTone')

// prefering 'oninput' instead of 'onchange'
// because 'onchange' updates only when mouse up

// https://github.com/processing/p5.js/blob/master/src/math/calculation.js#L450
const rangeMap = (n, start1, stop1, start2, stop2) => {

    return (n - start1) / (stop1 - start1) * (stop2 - start2) + start2

}

const GColor = function GColor (r, g, b) {

    r = (typeof r === 'undefined') ? 0 : r

    g = (typeof g === 'undefined') ? 0 : g

    b = (typeof b === 'undefined') ? 0 : b

    return { r, g, b }

}

const createColorRange = (c1, c2) => {

    const colorList = []
    let tmpColor = {}

    for (let i = 0; i < 255; i += 1) {

        tmpColor = new GColor ()

        tmpColor.r = c1.r + ((i * (c2.r - c1.r)) / 255)

        tmpColor.g = c1.g + ((i * (c2.g - c1.g)) / 255)

        tmpColor.b = c1.b + ((i * (c2.b - c1.b)) / 255)

        colorList.push (tmpColor)
    
    }

    return colorList

}

const GGreen = GColor (99, 188, 248)
const GRed = GColor (222, 106, 99)
const GRange = createColorRange (GGreen, GRed)

// listen on checkbox input

checkbox.oninput = async (e) => {

    const storage = await browser.storage.local.get ()
    
    await browser.storage.local.set ({
        ...storage,
        'isActive': e.target.checked,
    })     
    
}    

// listen on fader input
slider.oninput = async (e) => {
    
    const storage = await browser.storage.local.get ()

    await browser.storage.local.set ({
        ...storage,
        'speed': e.target.value,
    })     

}    

const computePercentValue = (speed) => {

    return (speed * 100 - 100).toFixed (0)

}

const computeToneValue = (speed) => {

    return (12 * (Math.log (speed) / Math.log (2))).toFixed (1)

}

const updateIndicator = (type, indicator, value) => {

    switch (type) {

        case 'percent':
            indicator.textContent = computePercentValue (value) + ' %'

            break

        case 'tone':
            indicator.textContent = computeToneValue (value) + ' st'

            break

        default:
            return null
    
    }

    if (value === 1) {

        indicator.style.setProperty ('--indicator-value-color', '#808386')

        indicator.style.setProperty ('--indicator-value-shadow-opacity', 0.15)
        
    } else {

        if (value < 1) {
            
            indicator.style.setProperty ('--indicator-value-shadow-opacity', rangeMap (value, 1, 0.5, 0.3, 0.5))
        
        } else {

            indicator.style.setProperty ('--indicator-value-shadow-opacity', rangeMap (value, 1, 1.5, 0.3, 0.5))
        
        }

        indicator.style.setProperty ('--indicator-value-color', '#63BCF8')
    
    }

}

const updateSlider = (value) => {

    if (value === 1) {

        slider.value = 1

        slider.disabled = true

        slider.style.setProperty ('--slider-handle-shadow-opacity', 0.2)

        slider.style.setProperty ('--slider-handle-color', '#808386')

        slider.style.setProperty ('--slider-fill-padding-right', '0px')
        
        slider.style.setProperty ('--slider-fill-border-right', '0px')
        
        slider.style.setProperty ('--slider-fill-padding-left', '0px')

        slider.style.setProperty ('--slider-fill-border-left', '0px')

    } else {

        slider.value = value
        
        slider.removeAttribute ('disabled')

        slider.style.setProperty ('--slider-handle-color', '#63BCF8')

        const rand = Math.floor (rangeMap (value, 0.5, 1.5, 0, 1))
        const currentColor = GRange[rand]
        const cssCode = 'rgb(' + currentColor.r + ',' + currentColor.g + ',' + currentColor.b + ')'

        slider.style.setProperty ('--fill-color', cssCode)

        slider.style.setProperty ('--slider-handle-color', cssCode)

        if (value < 1) {
            
            // slider handle shadow
            slider.style.setProperty ('--slider-handle-shadow-opacity', rangeMap (value, 1, 0.5, 0.4, 0.8))

            // slider color fill
            slider.style.setProperty ('--slider-fill-padding-right', '0px')
            
            slider.style.setProperty ('--slider-fill-border-right', '0px')
            
            slider.style.setProperty ('--slider-fill-padding-left', rangeMap (value, 1, 0.5, 0, 100) + 'px')

            slider.style.setProperty ('--slider-fill-border-left', '7px')
        
        } else {

            // slider handle shadow
            slider.style.setProperty ('--slider-handle-shadow-opacity', rangeMap (value, 1, 1.5, 0.4, 0.8))

            // slider color fill
            slider.style.setProperty ('--slider-fill-padding-left', '0px')

            slider.style.setProperty ('--slider-fill-border-left', '0px')
        
            slider.style.setProperty ('--slider-fill-padding-right', rangeMap (value, 1, 1.5, 0, 100) + 'px')

            slider.style.setProperty ('--slider-fill-border-right', '7px')
            
        }
        
    }
    
}

// listen on browser storage and change percent and tone value
browser.storage.onChanged.addListener ((changes) => {
    
    const isActive = changes.isActive.newValue
    const valueOrActive = () => isActive ? changes.speed.newValue : 1

    updateIndicator ('percent', newPercent, valueOrActive ())

    updateIndicator ('tone', newTone, valueOrActive ())

    updateSlider (valueOrActive ())

})

const init = async () => {

    // add if not set value (first init)

    const storage = await browser.storage.local.get ()
    const valueOrActive = () => storage.isActive ? storage.speed : 1

    checkbox.checked = storage.isActive

    slider.value = valueOrActive ()
        
    updateIndicator ('percent', newPercent, valueOrActive ())
        
    updateIndicator ('tone', newTone, valueOrActive ())
            
    updateSlider (valueOrActive ())

}

// eslint-disable-next-line no-console
init ().catch (err => console.error (err))