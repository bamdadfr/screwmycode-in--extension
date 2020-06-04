// eslint-disable-next-line no-undef
const getBrowser = () => browser

const getState = async () => {

    const storage = await getBrowser ().storage.local.get ()

    return storage

}

const setState = async (type, payload) => {

    const storage = await getBrowser ().storage.local.get ()

    switch (type) {

        case 'isReady':
            await getBrowser ().storage.local.set ({
                ...storage,
                'isReady': payload,
            })

            break

        case 'isActive':
            await getBrowser ().storage.local.set ({
                ...storage,
                'isActive': payload,
            })

            break

        case 'speed':

            if (payload < 0.5) {

                payload = 0.5

            } else if (payload > 1.5) {

                payload = 1.5

            }
            
            await getBrowser ().storage.local.set ({
                ...storage,
                'speed': payload,
            })

            break

        default:
            return null
            
    }

}

export {
    getState,
    setState,
    getBrowser,
}