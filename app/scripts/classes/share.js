import { getUrl, getState } from '../functions/browser'
import { parseId } from '../functions/youtube'

export default class Share {

    constructor (element) {

        this.element = element

        this.baseUrl = 'https://screwmycode.in/youtube/'

        this.speedUrl = 'speed='

        this.setEvents (this.element)
    
    }

    setEvents (dom) {

        dom.onclick = () => {

            this.click ()
        
        }
    
    }

    enable () {

        this.element.style = ''

    }

    disable () {

        this.element.style = 'display: none;'
    
    }

    async click () {

        const storage = await getState ()
        const speed = storage.speed.toFixed (3)
        const id = parseId (await getUrl ())
        const url = this.baseUrl + id + '?' + this.speedUrl + speed

        window.open (url, '_blank')
    
    }

}