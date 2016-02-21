import {Page, NavController, NavParams} from 'ionic-framework/ionic';
import {AddItemPage} from '../add-item/add-item';
import {ItemDetailPage} from '../item-detail/item-detail'
@Page({
  templateUrl: 'build/pages/list/list.html'
})
export class ListPage {
  constructor(nav: NavController) {
    this.nav = nav;
    this.items = [
      {title:'hi', description: 'Whats Up?'},
      {title:'hi2', description: 'Whats Up?'},
      {title:'hi3', description: 'Whats Up?'},
    ]
  }

  addItem(){
    this.nav.push(AddItemPage, {ListPage: this});
  }

  viewItem(item){
    this.nav.push(ItemDetailPage, {item: item});
  }

  // saveItem(item)
  // {
  //   this.items += item;
  // }
}
