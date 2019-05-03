import './ContainerFieldComponent.html';

export default class ContainerFieldComponent {

  constructor () {}

  containerFieldComponentReady = (event) => {
    const isPhone = Ext.os.is.Phone;
    this.cmp = event.detail.cmp;
    const layout = isPhone ? "vbox" : "hbox";
    this.cmp.setLayout(layout);
  }
}
