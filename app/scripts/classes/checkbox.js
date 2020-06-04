import { getBrowser, setState } from '../functions/browser'

class Checkbox {

    constructor (element) {

        this.checkbox = element

        this.browser = getBrowser ()

        this.initEvents (this.checkbox)
    
    }

    initEvents (dom) {

        dom.oninput = async (e) => {

            setState ('isActive', e.target.checked)
            
        }    
    
    }

    enable () {

        this.checkbox.checked = true
    
    }

    disable () {

        this.checkbox.checked = false
    
    }

}

export default Checkbox