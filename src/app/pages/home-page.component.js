import { WFMComponent, router } from '../../framework/index';

class HomePageComponent extends WFMComponent {
    constructor(config){
        super(config)

        this.data = {
            title: 'Главная страница работает!!!',
            linckTitle : 'Перейти на другую страницу'
        }
    }

    events() {
        return {
            'click .js-link': 'goToTabs'
        }
    }

    //функция срабатывет перед рендерингом модуля в дом дерево инмциализации модуля
    onInit() {
        console.log('Component init') 
    }

    //функция срабатывает после добавления модуля в дом дерево
    afterInit() {
        console.log('Component after init')
    }

    goToTabs(event) {
        event.preventDefault() // отменяем все события у данного эл.
        router.navigate('tabs')
    }
}


export const homePageComponent = new HomePageComponent({
    selector: 'app-home-page',
    template: `
      <div class="row">
        <div class="col s6 offset-s3 home__block">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">{{ title }}</span>
              <p>Пока тут нет никакого функционала</p>
            </div>
            <div class="card-action">
              <a href="#not-existing-path" class="js-link">{{ linckTitle }}</a>
            </div>
          </div>
        </div>
      </div>
    `,

    styles: `
        .home__block { margin-top: 40px; }
    ` 
})
