import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Filter } from 'src/app/models/filter';
import { CategoriesService } from 'src/app/services/api/categories.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.less']
})
export class FiltersComponent implements OnInit {
  all!: boolean;
  buttons!: Filter[];
  @Output() shareID = new EventEmitter();

  constructor(private categoriesService: CategoriesService) { }

  getCategories(): void {
    this.all = true;
    this.categoriesService.getCategory().subscribe({
      next: data => {
        this.buttons = data;
        this.buttons.map(data => {
          data.active = false;
        })
      }
    })
  }

  getCategoryProducts(id: number) {
    this.buttons.map(data => {
      if (data.id === id) {
        data.active = true
        this.all = false;
      } else {
        data.active = false
      }
    })
    this.shareID.emit(id);
  }

  ngOnInit(): void {
    this.getCategories();
  }
}
