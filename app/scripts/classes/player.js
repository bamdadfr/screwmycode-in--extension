import { getState, setState } from '../functions/browser'

export default class Player {

    constructor (anchor, inc) {

        this.anchor = anchor

        this.inc = inc
    
    }

    init () {

        const spacer = document.createElement ('span')

        spacer.style = 'margin-right: 5px'
    
        const div = document.createElement ('div')
    
        div.classList.add ('ytp-time-display')
    
        div.classList.add ('notranslate')
    
        const screw = document.createElement ('span')
    
        screw.innerHTML = 'screw'
        
        const down = document.createElement ('span')
        
        down.innerHTML = 'down'
    
        down.style = 'user-select: none; cursor: pointer;'
        
        down.onclick = async () => {
    
            const storage = await getState ()
    
            setState ('speed', storage.speed - this.inc)
            
        }
        
        const up = document.createElement ('span')
        
        up.innerHTML = 'up'
    
        up.style = 'user-select: none; cursor: pointer;'
        
        up.onclick = async () => {
    
            const storage = await getState ()
    
            setState ('speed', storage.speed + this.inc)
            
        }
        
        // div.appendChild (screw)
    
        div.appendChild (spacer)
    
        div.appendChild (down)
    
        div.appendChild (spacer.cloneNode ())
    
        div.appendChild (up)
    
        // add span to document
        // volumeSlider.parentNode.insertBefore (span, volumeSlider)
        this.anchor.parentNode.appendChild (div)
    
    }

}