/* eslint-disable no-undef */
const checkbox = document.getElementById ('checkbox')
const slider = document.getElementsByClassName ('slider')[0]
const newPercent = document.getElementById ('newPercent')
const newTone = document.getElementById ('newTone')

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

const animateIndicator = (element) => {

    element.style = 'color: #054570; background: #63BCF8;'

    setTimeout (() => {

        element.style = ''
    
    }, 500)

}

const updateIndicator = (type, indicator, value, noAnimation) => {

    if (type === 'percent') {

        indicator.textContent = computePercentValue (value) + ' %'
        
    } else if (type === 'tone') {
        
        indicator.textContent = computeToneValue (value) + ' st'
        
    }

    if (!noAnimation) {
        
        animateIndicator (indicator)
    
    }

}

// https://github.com/processing/p5.js/blob/master/src/math/calculation.js#L450
const rangeMap = (n, start1, stop1, start2, stop2) => {

    return (n - start1) / (stop1 - start1) * (stop2 - start2) + start2
    
}

const updateSlider = (value) => {

    if (value === 1) {

        slider.value = 1

        slider.disabled = true

        slider.style.setProperty ('--slider-handle-color', '#444')

        slider.style.setProperty ('--slider-fill-padding-right', '0px')
        
        slider.style.setProperty ('--slider-fill-border-right', '0px')
        
        slider.style.setProperty ('--slider-fill-padding-left', '0px')

        slider.style.setProperty ('--slider-fill-border-left', '0px')

    } else {

        slider.value = value
        
        slider.removeAttribute ('disabled')

        slider.style.setProperty ('--slider-handle-color', '#63BCF8')

        if (value < 1) {

            slider.style.setProperty ('--slider-fill-padding-right', '0px')
            
            slider.style.setProperty ('--slider-fill-border-right', '0px')
            
            slider.style.setProperty ('--slider-fill-padding-left', rangeMap (value, 0.5, 1, 100, 0) + 'px')

            slider.style.setProperty ('--slider-fill-border-left', '7px')
        
        } else {

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

    if (!storage.isActive) {

        slider.value = 1
        
        updateIndicator ('percent', newPercent, 1, true)
        
        updateIndicator ('tone', newTone, 1, true)
            
        updateSlider (1)
    
    } else {

        slider.value = storage.speed
            
        updateIndicator ('percent', newPercent, storage.speed, true)
        
        updateIndicator ('tone', newTone, storage.speed, true)
        
        updateSlider (storage.speed)

    }

}

// eslint-disable-next-line no-console
init ().catch (err => console.error (err))