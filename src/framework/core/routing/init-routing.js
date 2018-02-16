import { RoutingModule } from './routing.module';
import { wfm } from '../../tools/util';

export function initRouting(routes, dispather) {
    if (wfm.isUndefined(routes)) return

    let routing = new RoutingModule(routes, dispather)
    routing.init()
}
