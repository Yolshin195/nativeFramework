import { wfm } from '../../tools/util';

export function renderComponent(c) {
    //вызывает коллбек компонента если от был реализован
    if (!wfm.isUndefined(c.onInit)) c.onInit() 

    c.render()

    //вызывает коллбек компонента если от был реализован
    if (!wfm.isUndefined(c.afterInit)) c.afterInit()
}
