import { router } from '../tools/router';
import { wfm } from '../tools/util';
import { renderComponent } from './component/render.component';

export class Module {
    constructor(config){
        this.components = config.components
        this.bootstrapComponent = config.bootstrap
        this.routes = config.routes
    }

    start(){
        this.initComponents()

        if(this.routes) this.initRoutes()
    }

    initComponents(){
        this.bootstrapComponent.render()
        this.components.forEach(renderComponent)
    }

    initRoutes() {
        window.addEventListener(
            'hashchange',
            this.renderRoute.bind(this)
        ) 
        this.renderRoute()
    }

    renderRoute() {
        let url = router.getUrl()
        let route = this.routes.find(r => r.path === url)

        if (wfm.isUndefined(route)) {
            route = this.routes.find(r => r.path === '**')
        }

        document.querySelector('router-outlet').innerHTML = `
            <${route.component.selector}>
            </${route.component.selector}>
        `
        renderComponent(route.component)

    }


}
