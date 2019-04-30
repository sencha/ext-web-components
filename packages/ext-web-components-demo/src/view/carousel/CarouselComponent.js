import './CarouselComponent.scss';
import './CarouselComponent.html';

export default class CarouselComponent {

  constructor () {
    console.log('in CarouselComponent constructor');
  }

  readyCarouselHorizontal(event) {
    console.log('in ready event')
    this.carouselHorizontalCmp = event.detail.cmp
    this.carouselHorizontalCmp.setActiveItem(0)
  }

  readyCarouselHorizontalChild {
//    this.carouselHorizontalCmp.setActiveItem(0)
  }

  readyCarouselVertical(event) {
    this.carouselHorizontalCmp = event.detail.cmp
  }

  readyCarouselVerticalChild {
//    this.carouselHorizontalCmp.setActiveItem(0)
  }
}
