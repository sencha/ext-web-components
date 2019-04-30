import './ButtonComponent.scss';
import './ButtonComponent.html';

export default class ButtonComponent {

  constructor () {
    console.log('in ButtonComponent constructor');
    console.dir(this)
    console.dir(this.ButtonCmp)
  }

  readyButton = (event) => {
    console.log('in readyButton')
    this.ButtonCmp = event.detail.cmp
    console.log(event)
    this.button = event.target
    console.log(event)
    console.log(this)
  }

//   readyButton2(event) {
//     console.log('in ready event')
//     this.ButtonCmp = event.detail.cmp
//     console.dir('this.ButtonCmp')
//     console.dir(this.ButtonCmp)
// //    this.ButtonCmp.setActiveItem(0)
//   }

  sayHello = (event) => {
    console.log('sayHello')
    console.dir(this)
    console.log(event)
    this.ButtonCmp.setText('changed')
    this.button.text= 'new'
  }


//   sayHello(button, e) {
//     console.log('in sayHello')
//     console.dir(button)
//     console.dir(this)
//     console.dir(this.ext)
// //    this.text = 'hello'
// //    this.setText('hi there')
//   }

}
