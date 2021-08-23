import speedToPercentage from 'speed-to-percentage'
import { getState } from '../state/get-state'
import { getPercentage } from './get-percentage'

/**
 *
 */
export async function setPercentage () {

    const percentage = getPercentage ()
    const { isActive, speed } = await getState ()

    percentage.innerText = isActive
        ? `${speedToPercentage (speed)} %`
        : 'off'

}