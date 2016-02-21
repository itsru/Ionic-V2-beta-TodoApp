import {Page, NavController, NavParams} from 'ionic-framework/ionic';
import {AddItemPage} from '../add-item/add-item';
import {ItemDetailPage} from '../item-detail/item-detail'
import {DataService} from '../../providers/data'

@Page({
  templateUrl: 'build/pages/list/list.html'
})

export class ListPage {
  constructor(
    nav: NavController,
    dataService: DataService) {
    this.nav = nav;
    this.dataService = dataService;

    this.items = [];

    this.dataService.getData().then((todos) => {
       this.items = ("todos", JSON.parse(todos)) || [];
    });
  }

  addItem(){
    this.nav.push(AddItemPage, {
      ListPage: this
    });
  }

  viewItem(item){
    this.nav.push(ItemDetailPage, {
      item: item
    });
  }

  saveItem(item)
  {
    this.items.push(item);
    this.dataService.save(item);
  }
}
