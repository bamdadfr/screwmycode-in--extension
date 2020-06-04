import { Color, Rainbow } from '../functions/colors'
import rangeMap from '../functions/rangeMap'

export default {
    'darkest': 'black',
    'darker': '#808386',
    'normal': null,
    'brighter': 'rgb(222, 106, 99)',
    'brightest': 'rgb(99, 188, 248)',
}

const color1 = Color (99, 188, 248)
const color2 = Color (222, 106, 99)
const rainbow = Rainbow (color1, color2)

const getRainbow = (value) => {

    const rand = Math.floor (rangeMap (value, 0.5, 1.5, 0, 254))
    const currentColor = rainbow[rand]
    const cssCode = 'rgb(' + currentColor.r + ',' + currentColor.g + ',' + currentColor.b + ')'

    return cssCode

}

export {
    getRainbow,
}