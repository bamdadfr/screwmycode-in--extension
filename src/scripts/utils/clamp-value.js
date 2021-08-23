/**
 * @param {number|string} v input value
 * @param {object} params parameters
 * @param {number} params.min minimum value
 * @param {number} params.max maximum value
 * @param {number} params.def default value
 * @returns {number} clamped value
 */
export function clampValue (
    v, {
        min,
        max,
        def,
    },
) {

    if (!v) throw new Error ('v is not defined')

    if (!min) throw new Error ('min is not defined')

    if (!max) throw new Error ('max is not defined')

    if (!def) throw new Error ('def is not defined')

    let value = v

    if (typeof value === 'string') value = parseFloat (v)

    if (value < min) value = min

    if (value > max) value = max

    value = value.toFixed (3)

    if (Number.isNaN (value)) value = def

    return parseFloat (value)

}