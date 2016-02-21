import {Storage, LocalStorage} from 'ionic/ionic';
import {Inject} from 'angular2/core';

@Inject()
export class DataService{
  constructor(){
    this.storage = new Storage(LocalStorage, {name: 'todoapp'});
    this.data = null;

    this.storage.get('todoapp').then((todos) => {
      this.data = JSON.parse(todos);
    });
  }

  getData(){
    return this.storage.get('todoapp');
  }

  save(item)
  {
    if(!this.data){
      this.data = [item];
    }
    else {
      this.data.push(item);
    }
    let newData = JSON.stringify(item);
    this.storage.set('todoapp', newData);
  }
}
