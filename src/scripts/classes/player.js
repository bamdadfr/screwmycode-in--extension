import inc from '../config/inc'
import { getState, setState } from '../functions/browser'
import { computePercentValue, computeToneValue } from '../functions/indicators'

export default class Player {

    constructor (anchor) {

        this.anchor = anchor

        this.inc = inc

        this.div = {
            'id': 'screw-player',
        }

        this.percent = {
            'id': this.div.id + '-' + 'percent',
            'text': 'percent',
        }

        this.tone = {
            'id': this.div.id + '-' + 'tone',
            'text': 'tone',
        }

    }

    setElement (el) {

        return document.createElement (el)

    }

    getElement (id) {

        return document.getElementById (id)

    }

    setSpacer () {

        const spacer = this.setElement ('span')

        spacer.style = 'margin-right: 5px'

        return spacer

    }

    setDiv () {

        const div = this.setElement ('div')

        div.classList.add ('ytp-time-display')

        div.classList.add ('notranslate')

        return div

    }

    setTone () {

        const tone = this.setElement ('span')

        tone.style = `
            user-select: none;
            cursor: pointer;
        `

        tone.innerHTML = this.tone.text

        tone.id = this.tone.id

        tone.onclick = () => {

            setState ('speed', 1)

        }

        return tone

    }

    updateTone (v) {

        const tone = this.getElement (this.tone.id)

        tone.innerHTML = computeToneValue (v) + ' st'

    }

    setPercent () {

        const percent = this.setElement ('span')

        percent.style = `
            user-select: none;
            cursor: pointer;
        `

        percent.innerHTML = this.percent.text

        percent.id = this.percent.id

        percent.onclick = () => {

            setState ('speed', 1)

        }

        return percent

    }

    updatePercent (v) {

        const percent = this.getElement (this.percent.id)

        percent.innerHTML = computePercentValue (v) + ' %'

    }

    setDown () {

        const down = this.setElement ('span')

        down.style = 'user-select: none; cursor: pointer;'

        down.innerHTML = 'down'

        down.onclick = async () => {

            const storage = await getState ()

            setState ('speed', storage.speed - this.inc)

        }

        return down

    }

    setUp () {

        const up = this.setElement ('span')

        up.style = 'user-select: none; cursor: pointer;'

        up.innerHTML = 'up'

        up.onclick = async () => {

            const storage = await getState ()

            setState ('speed', storage.speed + this.inc)

        }

        return up

    }

    update (v) {

        this.updatePercent (v)

        this.updateTone (v)

    }

    init () {

        if (this.getElement (this.div.id) === null) {

            const div = this.setDiv ()
            const percent = this.setPercent ()
            const tone = this.setTone ()
            const down = this.setDown ()
            const up = this.setUp ()
            const spacer = this.setSpacer ()

            div.appendChild (down)

            div.appendChild (spacer)

            div.appendChild (up)

            div.appendChild (spacer.cloneNode ())

            div.appendChild (percent)

            div.appendChild (spacer.cloneNode ())

            div.appendChild (tone)

            div.id = this.div.id

            // add span to document
            // volumeSlider.parentNode.insertBefore (span, volumeSlider)
            this.anchor.parentNode.appendChild (div)

        }

    }

}