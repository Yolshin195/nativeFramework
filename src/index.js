import { bootstrap, wfm } from './framework/index'
import { appModule } from './app/app.module'

wfm.delay().then(() => {
    bootstrap(appModule)
})