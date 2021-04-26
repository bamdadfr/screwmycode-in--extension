export const computePercentValue = (speed) => (speed * 100 - 100).toFixed (0)

export const computeToneValue = (speed) => (12 * (Math.log (speed) / Math.log (2))).toFixed (1)
