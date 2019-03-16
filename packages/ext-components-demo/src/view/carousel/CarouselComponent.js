import './CarouselComponent.scss';
import './CarouselComponent.html';

export default class CarouselComponent {

  constructor () {
    console.log('in CarouselComponent constructor');
  }

  readyCarouselHorizontal(event) {
    this.carouselHorizontalCmp = event.detail.cmp
  }

  readyCarouselHorizontalChild(event) {
//    this.carouselHorizontalCmp.setActiveItem(0)
  }

  readyCarouselVertical(event) {
    this.carouselHorizontalCmp = event.detail.cmp
  }

  readyCarouselVerticalChild(event) {
//    this.carouselHorizontalCmp.setActiveItem(0)
  }
}
