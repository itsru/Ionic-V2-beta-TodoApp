import {Page, NavController, NavParams} from 'ionic-framework/ionic';


@Page({
  templateUrl: 'build/pages/edit-item/edit-item.html'
})
export class EditItemPage {
  constructor(nav: NavController, navParams: NavParams) {
    this.nav = nav;
    this.navParams = navParams;
    this.index= this.navParams.get('index');
    this.item= this.navParams.get('item');
  }

  updateItem(){
    if(!this.item.title && !this.item.description){
      return false;
    }
    let updatedItem = this.item;
    this.navParams.get('ListPage').updateItem(updatedItem,this.index);
    this.item = {
      title :'',
      description: ''
    };
  }

}
