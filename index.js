function parseTimeSince(parseSince) {
    if (typeof parseSince == 'object') {
        console.error('Parameter should not be an object but an integer.')
        return null
    }
    if (!parseInt(parseSince)) {
        console.error("Could not parse the parameter into an integer.")
        return null
    }
    if (new Date(parseInt(parseSince)) == 'Invalid Date') {
        console.error("Parameter should be a number or a string that can be parsed into date.")
        return null
    }
    let delta = Math.floor((Date.now()-parseSince)/(1000*60))
    let timeElapsed = ""
    if (delta == 0) return 'Just now'
    else {
        if (delta == 1) timeElapsed = "minute"
        else if (delta < 60) timeElapsed = "minutes"
        else {
            delta /= 60
            if (Math.floor(delta) == 1) timeElapsed = 'hour'
            else if (delta < 24) timeElapsed = 'hours'
            else {
                delta /= 24
                if (Math.floor(delta) == 1) timeElapsed = 'day'
                else if (delta < 30) timeElapsed = 'days'
                else {
                    delta /= 30
                    if (Math.floor(delta) == 1) timeElapsed = 'month'
                    else if (delta < 12) timeElapsed = 'months'
                    else {
                        delta /= 12
                        if (Math.floor(delta) == 1) timeElapsed = 'year'
                        else timeElapsed = 'years'
                    }
                }
            }
        }
    }
    return `${Math.floor(delta)} ${timeElapsed} ago.`
}
module.exports = parseTimeSince