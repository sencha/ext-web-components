import './TitlebarComponent.scss';
import './TitlebarComponent.html';

export default class TitlebarComponent {

  constructor () {
  };

  readyRightContainer = (event) => {
    this.rightContainerCmp = event.detail.cmp;
    this.rightContainerCmp.updateHtml('Build: ' + 'BUILD_VERSION'); // eslint-disable-line no-undef
}

  toggleTree = event => {
    console.log(event)

  };

//   handler = (button, e) => {
//     console.dir(button)
//     console.dir(e)
//     this.counter2++;
//     this.buttonComp2.setText(this.counter2 + ' (cmp)');
//   };

}
