export const regEx = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/

export const parseId = (url) => {

    const match = url.match (regEx)

    if (match && match[2].length === 11) {

        return match[2]

    }

    return null

}
