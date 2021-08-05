import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist';
  

  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    { title: 'Play Games', isDone: false },
    { title: 'Walk', isDone: true },
    { title: 'Laundry', isDone: false },
    { title: 'Sleep', isDone: false },
  ];


  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter(item => this.filter === 'done' ? item.isDone : !item.isDone);
  }

  addItem(title: string) {
    this.allItems.unshift({
      title,
      isDone: false
    });
  }

  remove(task: any) {
    this.allItems.splice(this.allItems.indexOf(task), 1);
  }

}

