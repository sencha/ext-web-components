import './CheckBoxFieldComponent.html';

export default class CheckBoxFieldComponent {
  constructor () {
  }

  checkboxfieldready1 = (event) => {
    const isPhone = Ext.os.is.Phone;
    this.cmp = event.detail.cmp;

    const top = !isPhone ? 10 : null
    const left = !isPhone ? 10 : null

    this.cmp.setTop(top);
    this.cmp.setLeft(left);
  }
}
