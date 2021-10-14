import { setSemitones } from './set-semitones'
import { handleIndicator } from './handle-indicator'

/**
 * @description handle the `semitones` element
 */
export async function handleSemitones () {

    await handleIndicator (setSemitones)

}