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

export {
    Color,
    Rainbow,
}