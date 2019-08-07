import './BreadcrumbToolBarComponent.html';
import fileData from './Files.js';

export default class BreadcrumbToolBarComponent {
    constructor() {}

    breadcrumbarReady = (event) => {
        this.breadcrumbarCmp = event.detail.cmp;
        this.treeStore = Ext.create('Ext.data.TreeStore', {
            rootVisible: true,
            root: fileData
        });
        this.breadcrumbarCmp.setStore(this.treeStore);
    }
}
