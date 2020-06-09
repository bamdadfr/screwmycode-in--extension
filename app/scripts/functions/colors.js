import rangeMap from './rangeMap'
import { theme } from '../config/colors'

const Color = (r, g, b) => {

    r = (typeof r === 'undefined') ? 0 : r

    g = (typeof g === 'undefined') ? 0 : g

    b = (typeof b === 'undefined') ? 0 : b

    return { r, g, b }

}

const Rainbow = (c1, c2) => {

    const colorList = []
    let tmpColor = {}

    for (let i = 0; i < 255; i += 1) {

        tmpColor = Color ()

        tmpColor.r = Math.floor (c1.r + ((i * (c2.r - c1.r)) / 255))

        tmpColor.g = Math.floor (c1.g + ((i * (c2.g - c1.g)) / 255))

        tmpColor.b = Math.floor (c1.b + ((i * (c2.b - c1.b)) / 255))

        colorList.push (tmpColor)
    
    }

    return colorList

}

const color1 = Color (99, 188, 248)
const color2 = Color (222, 106, 99)
const rainbow = Rainbow (color1, color2)

const getRainbow = (value) => {

    const index = Math.floor (rangeMap (value, 0.5, 1.5, 0, 254))
    const currentColor = rainbow[index]
    const cssCode = 'rgb(' + currentColor.r + ',' + currentColor.g + ',' + currentColor.b + ')'

    return cssCode

}

const init = () => {

    const root = document.documentElement

    Object.keys (theme).forEach ((k) => {

        root.style.setProperty ('--' + k, theme[k])
    
    })

}

init ()

export {
    Color,
    Rainbow,
    getRainbow,
}