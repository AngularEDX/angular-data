import {Component} from '@angular/core';
import {DocDBDataSource} from './services/docdbdatasource.service';

@Component({
  selector: 'grid',
  templateUrl: 'app/views/grid.component.html',
  providers: [
    DocDBDataSource
  ]
})
export class GridComponent {
  private items : any[] = [];
  constructor(source : DocDBDataSource) {
    source.getAssets((documents) => {
      this.items = [];
      this.items.push(documents);
    });
  }
}