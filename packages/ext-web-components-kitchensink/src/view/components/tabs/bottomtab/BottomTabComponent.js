import './BottomTabComponent.html';

export default class BottomTabComponent {
    tabpanelReady = (event) => {
        this.tabpanelCmp = event.detail.cmp;
        this.tabpanelCmp.setTabBar({docked:'bottom'});
    }
}
