import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Filter } from 'src/app/models/filter';
import { CategoriesService } from 'src/app/services/api/categories.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.less']
})
export class FiltersComponent implements OnInit {
  all: boolean = true;
  buttons!: Filter[];
  @Output() shareID = new EventEmitter();

  constructor(private categoriesService: CategoriesService) { }

  getCategories(): void {
    this.categoriesService.getCategory().subscribe({
      next: data => {
        this.buttons = data;
      }
    })
  }

  getCategoryProducts(id: number) {
    this.shareID.emit(id);
  }

  ngOnInit(): void {
    this.getCategories();
  }
}
