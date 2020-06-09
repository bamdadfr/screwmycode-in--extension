import rangeMap from '../functions/rangeMap'
import { computePercentValue, computeToneValue } from '../functions/indicators'
import colors from '../config/colors'
import { getRainbow } from '../functions/colors'

export default class Indicator {

    constructor (type, indicator) {

        this.type = type

        this.indicator = indicator
    
    }

    updateText (value) {

        switch (this.type) {

            case 'percent':
                this.indicator.textContent = computePercentValue (value) + ' %'
    
                break
    
            case 'tone':
                this.indicator.textContent = computeToneValue (value) + ' st'
    
                break
    
            default:
                return null
        
        }
    
    }

    updateShadow (value) {
    
        if (value < 1) {
                
            this.indicator.style.setProperty ('--indicator-value-shadow-opacity', rangeMap (value, 1, 0.5, 0.3, 0.5))
            
        } else {
    
            this.indicator.style.setProperty ('--indicator-value-shadow-opacity', rangeMap (value, 1, 1.5, 0.3, 0.5))
            
        }

    }

    disable () {

        this.updateText (1)

        this.indicator.style.setProperty ('--indicator-value-color', colors.darker)
    
        this.indicator.style.setProperty ('--indicator-value-shadow-opacity', 0.15)

    }

    updateColor (value) {

        // this.indicator.style.setProperty ('--indicator-value-color', colors.brightest)
        this.indicator.style.setProperty ('--indicator-value-color', getRainbow (value))
    
    }

    update (value) {

        this.updateColor (value)

        this.updateText (value)

        this.updateShadow (value)
    
    }

}