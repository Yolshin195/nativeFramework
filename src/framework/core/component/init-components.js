import { renderComponent } from './render.component';
import { wfm } from '../../tools/util';

export function initComponents(bootstrap, components) {
    //this.bootstrapComponent.render()
    //this.components.forEach(renderComponent)
    if(wfm.isUndefined(bootstrap)) {
        throw new Error('Bootstrap component in not defined')
    }

    [bootstrap, ...components].forEach(renderComponent)
}
