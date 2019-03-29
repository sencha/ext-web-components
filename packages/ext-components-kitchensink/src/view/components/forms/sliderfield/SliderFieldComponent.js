import './SliderFieldComponent.css';
import './SliderFieldComponent.html';

export default class SliderFieldComponent {

  constructor () {
    this.singleValue = 20;
    this.liveUpdateValue = 60;
    this.multipleValue = [10, 70];
  }

  oncontainerready1(event) {
    this.containercmp1 = event.detail.cmp;
    this.containercmp1.setHtml(`Value: ${this.singleValue}`);
  }

  oncontainerready2(event) {
    this.containercmp2 = event.detail.cmp;
    this.containercmp2.setHtml(`Value: ${this.liveUpdateValue}`);
  }

  oncontainerready3(event) {
    this.containercmp3 = event.detail.cmp;
    this.containercmp3.setHtml(`Value: ${this.multipleValue}`);
  }

  onsinglechange(event) {
    this.singleValue = event.detail.newValue;
    this.containercmp1.setHtml(`Value: ${event.detail.newValue}`);
  }

  onliveupdatechange(event) {
    this.liveUpdateValue = event.detail.newValue;
    this.containercmp2.setHtml(`Value: ${event.detail.newValue}`);
  }

  onmultiplechange(event) {
    this.multipleValue = event.detail.newValue;
    this.containercmp3.setHtml(`Value: ${event.detail.newValue}`);
  }
  
}
