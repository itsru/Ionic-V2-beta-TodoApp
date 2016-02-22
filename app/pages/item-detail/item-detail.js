import {Page, NavParams} from 'ionic-framework/ionic';

@Page({
  templateUrl: 'build/pages/item-detail/item-detail.html'
})

export class ItemDetailPage {
  constructor(navParams: NavParams) {
    this.navParams = navParams;
    this.item =this.navParams.get('item');
  }

  editItem() {
    this.navParams.get('ListPage').editItem(false, this.item);
  }

}
