import './CarouselComponent.scss';
import './CarouselComponent.html';

export default class CarouselComponent {

  constructor () {
    console.log('in CarouselComponent constructor');
  }

  readyCarouselHorizontal(event) {
    console.log('readyCarouselHorizontal')
    var cmp = event.detail.cmp
    cmp.setActiveItem(0)
  }
}
