import './CarouselComponent.scss';
import './CarouselComponent.html';

export default class CarouselComponent {

  readyCarouselHorizontal(event) {
    this.carouselHorizontalCmp = event.detail.cmp
    this.carouselHorizontalCmp.setActiveItem(0)
  }

  readyCarouselVertical(event) {
    this.carouselVerticalCmp = event.detail.cmp
    this.carouselVerticalCmp.setActiveItem(0)
  }

}
