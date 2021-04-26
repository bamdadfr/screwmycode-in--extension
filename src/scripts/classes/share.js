import { getUrl, getState, getBrowser } from '../functions/browser'
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

        // https://bugzilla.mozilla.org/show_bug.cgi?id=1282021
        getBrowser ().tabs.create ({
            'url': url,
        })

    }

}