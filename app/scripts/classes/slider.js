
import { Color, Rainbow } from '../functions/colors'
import rangeMap from '../functions/rangeMap'

export default class Slider {

    constructor (element, browser) {
        
        this.slider = element

        this.browser = browser

        this.initEvents (this.slider)

        this.left = Color (99, 188, 248)

        this.right = Color (222, 106, 99)

        this.rainbow = Rainbow (this.left, this.right)
    
    }

    async initEvents (dom) {

        dom.oninput = async (e) => {

            const storage = await this.browser.storage.local.get ()

            await this.browser.storage.local.set ({
                ...storage,
                'speed': e.target.value,
            })     
        
        }
    
    }

    enable (value) {

        this.slider.value = value
            
        this.slider.removeAttribute ('disabled')
    
        this.slider.style.setProperty ('--slider-handle-color', '#63BCF8')
    
        // const rand = Math.floor (rangeMap (value, 0.5, 1.5, 0, 1))
        // const currentColor = this.rainbow[rand]
        // const cssCode = 'rgb(' + currentColor.r + ',' + currentColor.g + ',' + currentColor.b + ')'
    
        this.slider.style.setProperty ('--fill-color', '#63BCF8')
    
        this.slider.style.setProperty ('--slider-handle-color', '#63BCF8')
    
    }

    disable () {

        this.slider.value = 1
    
        this.slider.disabled = true

        this.slider.style.setProperty ('--slider-handle-shadow-opacity', 0.2)

        this.slider.style.setProperty ('--slider-handle-color', '#808386')

        this.slider.style.setProperty ('--slider-fill-padding-right', '0px')
        
        this.slider.style.setProperty ('--slider-fill-border-right', '0px')
        
        this.slider.style.setProperty ('--slider-fill-padding-left', '0px')

        this.slider.style.setProperty ('--slider-fill-border-left', '0px')

    }

    update (value) {

        this.enable (value)
    
        if (value < 1) {

            // slider handle shadow
            this.slider.style.setProperty ('--slider-handle-shadow-opacity', rangeMap (value, 1, 0.5, 0.4, 0.8))
    
            // slider color fill
            this.slider.style.setProperty ('--slider-fill-padding-right', '0px')
                
            this.slider.style.setProperty ('--slider-fill-border-right', '0px')
                
            this.slider.style.setProperty ('--slider-fill-padding-left', rangeMap (value, 1, 0.5, 0, 100) + 'px')
    
            this.slider.style.setProperty ('--slider-fill-border-left', '7px')
            
        } else {
    
            // slider handle shadow
            this.slider.style.setProperty ('--slider-handle-shadow-opacity', rangeMap (value, 1, 1.5, 0.4, 0.8))
    
            // slider color fill
            this.slider.style.setProperty ('--slider-fill-padding-left', '0px')
    
            this.slider.style.setProperty ('--slider-fill-border-left', '0px')
            
            this.slider.style.setProperty ('--slider-fill-padding-right', rangeMap (value, 1, 1.5, 0, 100) + 'px')
    
            this.slider.style.setProperty ('--slider-fill-border-right', '7px')
                
        }
    
    }

}