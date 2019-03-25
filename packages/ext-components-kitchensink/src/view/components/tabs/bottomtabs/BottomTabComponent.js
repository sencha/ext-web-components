import './BottomTabComponent.css';
import './BottomTabComponent.html';

export default class BottomTabComponent {

  constructor() {
  }
  tabpanelReady(event) {
    this.tabpanel = event.detail.cmp;
    this.tabpanel.setTabBar({docked:'bottom'});
  }

}
