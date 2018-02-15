import { renderComponent } from './component/render.component';
import { RoutingModule } from './routing/routing.module';
import { wfm } from '../tools/util';

export class Module {
    constructor(config){
        this.components = config.components
        this.bootstrapComponent = config.bootstrap
        this.routes = config.routes
    }

    start(){
        initComponents(this.bootstrapComponent, this.components)
        initRouting(this.routes)
    }

}

/////////////////////////////
// Приватные методы
////////////////////////////

function initComponents(bootstrap, components) {
    //this.bootstrapComponent.render()
    //this.components.forEach(renderComponent)
    if(wfm.isUndefined(bootstrap)) {
        throw new Error('Bootstrap component in not defined')
    }

    [bootstrap, ...components].forEach(renderComponent)
}

function initRouting(routes) {
    if (wfm.isUndefined(routes)) return

    let routing = new RoutingModule(routes)
    routing.init()
}
