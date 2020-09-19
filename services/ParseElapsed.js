class Parser {
    constructor() {
        this.presets = [
            { name: 'minute', threshold: 60 },
            { name: 'hour', threshold: 24 },
            { name: 'day', threshold: 30 },
            { name: 'month', threshold: 12 },
            { name: 'year', threshold: 10000 },
        ]
    }
    compute = parseSince => this.parse(Math.floor((Date.now()-parseSince)/(1000*60)))
    parse = (t, controller = 0) => {
        if (!t) return "Just now"
        let { presets } = this, { name, threshold } = presets[controller]
        if (Math.floor(t) == 1) return `${Math.floor(t)} ${name} ago`
        if (t < threshold) return `${Math.floor(t)} ${name}s ago`
        return this.parse(t/threshold, controller+1)
    }
}

module.exports = Parser