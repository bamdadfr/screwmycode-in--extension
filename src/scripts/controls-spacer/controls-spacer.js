/**
 * @function
 * @name ControlsSpacer
 * @description controls: create the `spacer` sub component
 * @return {HTMLSpanElement}
 */
export function ControlsSpacer () {

    const spacer = document.createElement ('span')

    spacer.style = 'margin-right: 5px;'

    return spacer

}