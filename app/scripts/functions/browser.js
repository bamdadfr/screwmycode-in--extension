// eslint-disable-next-line no-undef
export const getBrowser = () => browser

export const getUrl = async () => {

    const browser = await getBrowser ()

    const url = browser.tabs
        .query ({
            'active': true,
            'currentWindow': true,
        })
        .then (r => r[0].url)

    return url

}

export const getState = async () => {

    const storage = await getBrowser ().storage.local.get ()

    return storage

}

export const setState = async (type, payload) => {

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
