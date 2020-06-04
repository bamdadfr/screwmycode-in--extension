import { Color, Rainbow } from '../functions/colors'
import rangeMap from '../functions/rangeMap'

const colors = {
    'darkest': 'black',
    'darker': '#808386',
    'normal': null,
    'brighter': 'rgb(222, 106, 99)',
    'brightest': 'rgb(99, 188, 248)',
}

const theme = {
    'background': '#242930',
    'color': '#808386',
    'border': '#343434',
    'normal-color': '#63BCF8',
    'soft-background': '#2F353E',
}

export default colors

const init = () => {

    const root = document.documentElement

    Object.keys (theme).forEach ((k) => {

        root.style.setProperty ('--' + k, theme[k])
    
    })

}

init ()

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