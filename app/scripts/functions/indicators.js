const computePercentValue = (speed) => {

    return (speed * 100 - 100).toFixed (0)

}

const computeToneValue = (speed) => {

    return (12 * (Math.log (speed) / Math.log (2))).toFixed (1)

}

export {
    computePercentValue,
    computeToneValue,
}