const time = require('@fwd/time')
module.exports = (action, interval, runImmediately) => {
    
    if (typeof interval === 'string') {
        var phrase = interval.split(' ')
        var repeat = phrase[0]
        var int = phrase[1]
        var rate = phrase[2]
        interval = time(int, rate)
    }

    if (runImmediately) {
        action()
    }

    var interval = setInterval(() => {
        action()
    }, interval)

    return interval
    
}
