import './BottomTabComponent.html';

export default class BottomTabComponent {
    tabpanelReady = (event) => {
        this.tabpanel = event.detail.cmp;
        this.tabpanel.setTabBar({docked:'bottom'});
    }
}
