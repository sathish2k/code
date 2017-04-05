import { Component, Input, ViewChild, OnChanges, ChangeDetectorRef } from '@angular/core'
import { OwlCarousel } from '../shared/owl_carousel/owl_carousel.component'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  @ViewChild('carousel')
  private carousel: OwlCarousel;
  private optionsCarousel: any;
  

  constructor( private ref: ChangeDetectorRef ) {
    this.optionsCarousel = {
      loop: true,
      nav: false,
      autoplay:false,
      items:3
      
    }
  }

}
