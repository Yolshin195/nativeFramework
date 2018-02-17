import { wfm } from '../../tools/util'
import { pipesFactory } from './pipes-factory'

export function initPipes(pipes) {
    if (wfm.isUndefined(pipes)) return

    pipes.forEach(p => pipesFactory.registerPipe(p))
}
