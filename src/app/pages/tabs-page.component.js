import { WFMComponent } from '../../framework/index.js';

class TabsPageComponent extends WFMComponent {
    constructor(config){
        super(config)
    }
}

export const tabsPageComponent = new TabsPageComponent({
    selector: 'app-tabs-page',
    template: `
        <div><h1>tabs page component</h1></div> 
    `
})
