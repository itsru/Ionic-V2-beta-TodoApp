import {Page, NavController, NavParams, Events} from 'ionic-framework/ionic';
import {AddItemPage} from '../add-item/add-item';
import {ItemDetailPage} from '../item-detail/item-detail'
import {DataService} from '../../providers/data'
import {EditItemPage} from '../edit-item/edit-item'

@Page({
  templateUrl: 'build/pages/list/list.html'
})

export class ListPage {
  constructor(
    nav: NavController,
    dataService: DataService,
    events: Events) {
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

  editItem(slidingItem, item)
  {
    if (slidingItem)
      slidingItem.close();

    let index = this.items.indexOf(item);
    this.nav.push(EditItemPage, {
      ListPage: this,
      item: item,
      index: index
    })
  }

  updateItem(item,index) {
    this.items[index] = item;
    this.dataService.update(item, index);
  }
}
