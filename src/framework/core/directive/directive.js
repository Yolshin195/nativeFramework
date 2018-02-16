import { $ } from '../../tools/dom'
import { wfm } from '../../tools/util'

export class Directive {
    constructor(config) {
        this.selector = config.selector
        this.onInit = config.onInit

    }

    init() {
        let $els = $(document).findAll(this.selector) 

        if (!wfm.isUndefined(this.onInit) && !wfm.isEmpty($els)) {
            $els.forEach(e => {
                this.onInit(e, getParamValue(e, this.selector))
            })
        }

    }
}

function getParamValue($el, selector) {
    // [appHover]
    return $el.attr(selector.slice(1).slice(0, selector.length - 2))
}
