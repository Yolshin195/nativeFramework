import { RoutingModule } from './routing.module';
import { wfm } from '../../tools/util';

export function initRouting(routes) {
    if (wfm.isUndefined(routes)) return

    let routing = new RoutingModule(routes)
    routing.init()
}
