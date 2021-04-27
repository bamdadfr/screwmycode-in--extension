import { setState } from './set-state'
import { initState } from './init-state'
import { getState } from './get-state'

export const State = {
    'get': getState,
    'set': setState,
    'init': initState,
}