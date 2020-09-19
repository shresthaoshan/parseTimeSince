module.exports = parseSince => {
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
    return (new (require('./services/ParseElapsed'))).compute(parseSince)
}