
import rangeMap from '../functions/rangeMap'
import { getBrowser } from '../functions/browser'
import colors, { getRainbow } from '../config/colors'

export default class Slider {

    constructor (element) {
        
        this.slider = element

        this.browser = getBrowser ()

        this.initEvents (this.slider)
    
    }

    initEvents (dom) {

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
    
        this.slider.style.setProperty ('--fill-color', getRainbow (value))
    
        this.slider.style.setProperty ('--slider-handle-color', getRainbow (value))
    
    }

    disable () {

        this.slider.value = 1
    
        this.slider.disabled = true

        this.slider.style.setProperty ('--slider-handle-shadow-opacity', 0.2)

        this.slider.style.setProperty ('--slider-handle-color', colors.darker)

        this.slider.style.setProperty ('--slider-fill-padding-right', '0px')
        
        this.slider.style.setProperty ('--slider-fill-border-right', '0px')
        
        this.slider.style.setProperty ('--slider-fill-padding-left', '0px')

        this.slider.style.setProperty ('--slider-fill-border-left', '0px')

    }

    update (value) {

        this.enable (value)
    
        if (value < 1) {

            this.slider.style.setProperty ('--slider-handle-shadow-opacity', rangeMap (value, 1, 0.5, 0.4, 0.8))
    
            this.slider.style.setProperty ('--slider-fill-padding-right', '0px')
                
            this.slider.style.setProperty ('--slider-fill-border-right', '0px')
                
            this.slider.style.setProperty ('--slider-fill-padding-left', rangeMap (value, 1, 0.5, 0, 100) + 'px')
    
            this.slider.style.setProperty ('--slider-fill-border-left', '7px')
            
        } else {
    
            this.slider.style.setProperty ('--slider-handle-shadow-opacity', rangeMap (value, 1, 1.5, 0.4, 0.8))
    
            this.slider.style.setProperty ('--slider-fill-padding-left', '0px')
    
            this.slider.style.setProperty ('--slider-fill-border-left', '0px')
            
            this.slider.style.setProperty ('--slider-fill-padding-right', rangeMap (value, 1, 1.5, 0, 100) + 'px')
    
            this.slider.style.setProperty ('--slider-fill-border-right', '7px')
                
        }
    
    }

}