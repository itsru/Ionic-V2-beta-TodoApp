import {App, Platform} from 'ionic-framework/ionic';
import {Inject} from 'angular2/core';
import {ListPage} from './pages/list/list';
import {DataService} from './providers/data'

@App({
  template: '<ion-nav [root]="root"></ion-nav>',
  providers: [DataService],
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  constructor(@Inject(Platform) platform) {
    this.root = ListPage;

    platform.ready().then(() => {

    });
  }
}
