import {Page, NavController, NavParams} from 'ionic-framework/ionic';


@Page({
  templateUrl: 'build/pages/add-item/add-item.html'
})
export class AddItemPage {
  constructor(nav: NavController, navParams: NavParams) {
    this.nav = nav;
    this.navParams = navParams;
    this.title="";
    this.description="";

  }

  saveItem(){
    let newItem = {
      title: this.title;
      description: this.description;
    }

    this.navParams.get('ListPage').items.push(newItem);
    this.nav.pop();
  }

}
