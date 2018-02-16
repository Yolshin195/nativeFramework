import { wfm } from '../../tools/util'

export function initDirectives(directives) {
    if (wfm.isUndefined(directives)) return
    
    directives.forEach(d => d.init())
}
