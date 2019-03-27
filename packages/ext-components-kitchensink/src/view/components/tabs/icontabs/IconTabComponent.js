import './IconTabComponent.html';

export default class IconTabComponent {
  constructor () {
    console.log('in IconTabComponent constructor');
  }

  tabpanelReady(event) {
    this.tabpanel = event.detail.cmp;
    this.tabpanel.setTabBar({docked:'bottom'});
  }
}
