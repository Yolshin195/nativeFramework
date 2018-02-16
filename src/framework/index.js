import { Module as WFMModule } from './core/module'
import { Component as WFMComponent } from './core/component/component'
import { Directive as WFMDirective } from './core/directive/directive'
import { bootstrap } from './core/functions/bootstrap'
import { router } from './core/routing/router'
import { wfm } from './tools/util'
import { $ } from './tools/dom'
import { EventEmitter } from './tools/event-emitter'

export {
    WFMModule,
    WFMComponent,
    WFMDirective,
    bootstrap,
    router,
    wfm,
    $,
    EventEmitter
}
