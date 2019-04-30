import './ButtonComponent.scss';
import './ButtonComponent.html';

export default class ButtonComponent {


  handler {
    this.counter1++;
    this.buttonComp1.setText(this.counter1);
  }

  onClick =  => {
    console.log('on click')
    console.dir
    console.dir(this)
    this.counter2++;
    this.buttonComp2.setText(this.counter2)
  }


  buttonready1(event) {
    console.log('buttonReady1')
    this.buttonComp1 = event.detail.cmp;
  }

  buttonReady2 {
    console.log('buttonReady2')
    this.buttonComp2 = event.detail.cmp;
    console.dir(this.buttonComp2)
  }


  constructor () {
//    console.log('in ButtonComponent constructor');
//    console.dir(this)
//    console.dir(this.ButtonCmp)
    this.counter1 = 0;
    this.counter2 = 0;
  }

  readyButton =  => {
    console.log('in readyButton')
    this.ButtonCmp = event.detail.cmp
    console.log
    this.button = event.target
    console.log
    console.log(this)
  }

//   readyButton2 {
//     console.log('in ready event')
//     this.ButtonCmp = event.detail.cmp
//     console.dir('this.ButtonCmp')
//     console.dir(this.ButtonCmp)
// //    this.ButtonCmp.setActiveItem(0)
//   }

  sayHello =  => {
    console.log('sayHello')
    console.dir(this)
    console.log
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
