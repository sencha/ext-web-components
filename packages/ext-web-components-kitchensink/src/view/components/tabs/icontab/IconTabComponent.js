import './IconTabComponent.html';

export default class IconTabComponent {
    tabpanelReady = (event) => {
        this.tabpanelCmp = event.detail.cmp;
        this.tabpanelCmp.setTabBar({docked:'bottom'});
    }
}
