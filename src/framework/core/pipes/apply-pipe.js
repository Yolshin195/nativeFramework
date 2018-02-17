import { pipesFactory } from './pipes-factory'
import { wfm } from '../../tools/util' 

export function applyPipe(pipeData, value) {

    let pipe = pipesFactory.getPipe(pipeData.name)

    if ( wfm.isUndefined(pipe) ) throw new Error(`Pipe with name "${pipeData.name}" wasn't found`)

    if ( wfm.isUndefined(pipeData.args) ) pipeData.args = [] 

    return pipe.transform(value, ...pipeData.args)
}
