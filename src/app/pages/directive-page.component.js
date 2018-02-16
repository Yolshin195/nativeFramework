import { WFMComponent, router } from '../../framework/index';

class DirectivePageComponent extends WFMComponent {
    constructor(config){
        super(config)
    }
}


export const directivePageComponent = new DirectivePageComponent({
    selector: 'app-directive-page',
    template: `
      <div class="row">
        <div class="col s6 offset-s3 home__block">
            <h2 appHover="red">Навиди на меня</h2>
        </div>
      </div>
    `,

    styles: `
        .home__block {margin-top: 30px}
    ` 
})
