import { Component, OnInit, Input } from '@angular/core';
import { ICarouselItem } from 'src/app/shared/ICarouselItem.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.page.html',
  styleUrls: ['./carousel.page.scss'],
})
export class CarouselPage implements OnInit {

  @Input() height = 500;
  @Input() isFullScreen = false;
  @Input() items: ICarouselItem[] = [];
  option = {
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    // autoplay:true,
  }
  constructor() { }

  ngOnInit() {
  }

}
