import { wfm } from './util'

export class EventEmitter {
    constructor() {
        this.listeners = {}
    }

    on(eventName, func) {
        if (wfm.isUndefined(this.listeners[eventName])) this.listeners[eventName] = []

        this.listeners[eventName].push(func)
    }

    emit(eventName, data) {
        if (wfm.isUndefined(this.listeners[eventName])) return

        this.listeners[eventName].forEach( f => f(data) )
    }
}
