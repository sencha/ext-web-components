import './TitleBarComponent.css';
import './TitleBarComponent.html';

export default class TitleBarComponent {
  constructor() {
    this.isPhone = Ext.os.is.Phone;
  }

  menuReady(event) {
    this.menuCmp = event.detail.cmp;
    this.menuCmp.setHidden(!this.isPhone);
  }

  buttonReady(event){
    this.btnCmp = event.detail.cmp;
    this.btnCmp.setHidden(this.isPhone);
  }

  buttonReady1(event){
    this.btnCmp1 = event.detail.cmp;
    this.btnCmp1.setHidden(this.isPhone);
  }
  
  searchReady(event){
    this.search = event.detail.cmp;
    this.search.setHidden(this.isPhone);
  }

  searchReady1(event){
    this.search1 = event.detail.cmp;
    this.search1.setHidden(!this.isPhone);
  }

}
