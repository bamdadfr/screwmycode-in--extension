import { setState, getState } from '../functions/browser'
import inc from '../config/inc'

export default class Keyboard {

    constructor (el) {

        this.element = el

        this.inc = inc

        this.setEvents (this.element)
    
    }

    setEvents (dom) {

        dom.addEventListener ('keyup', (e) => {

            if (e.altKey === true && e.code === 'ArrowDown') this.pitch ('down')
        
            if (e.altKey === true && e.code === 'ArrowUp') this.pitch ('up')

            if (e.altKey === true && e.code === 'Enter') this.pitch ('reset')
        
        })
    
    }

    async pitch (direction) {

        const storage = await getState ()
        
        switch (direction) {

            case 'reset':
                setState ('speed', 1)

                break

            case 'down':
                setState ('speed', storage.speed - this.inc)

                break

            case 'up':
                setState ('speed', storage.speed + this.inc)

                break
                
            default:
                return null
                
        }
    
    }

}