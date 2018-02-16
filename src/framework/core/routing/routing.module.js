import { wfm } from '../../tools/util';
import { $ } from '../../tools/dom';
import { router } from './router';
import { renderComponent } from '../component/render.component';

export class RoutingModule {
    constructor(routes) {
        this.routes = routes 
    }

    init() {
        window.addEventListener(
            'hashchange',
            renderRoute.bind(this)
        ) 
        renderRoute.call(this) 
    }

}

////////////////////////
// Приватные методы
////////////////////////

function renderRoute() {
    let url = router.getUrl()
    let route = this.routes.find(r => r.path === url)

    if (wfm.isUndefined(route)) {
        route = this.routes.find(r => r.path === '**')
    }

    $('router-outlet').html(`
        <${route.component.selector}>
        </${route.component.selector}>
    `)
    renderComponent(route.component)

}

