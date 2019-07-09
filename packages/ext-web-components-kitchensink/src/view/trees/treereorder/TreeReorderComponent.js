import './TreeReorderComponent.html';
import data from './data';

// Ext.require([ 'Ext.grid.plugin.TreeDragDrop']);

export default class TreeComponent {
    onTreeReady = (event) => {
        this.treeCmp = event.detail.cmp;

        this.treeStore = Ext.create('Ext.data.TreeStore', {
            type: 'tree',
            rootVisible: true,
            root: data,
            folderSort: true,
            sorters: [{
                property: 'text',
                direction: 'ASC'
            }]
        });

        // this.plugins={
        //     treedragdrop:true
        // };

        this.treeCmp.setStore(this.treeStore);
        // this.treeCmp.setPlugins(this.plugins);
    }

    toolbarReady = (event) => {
        this.toolbar = event.detail.cmp;
    }

    onExpandAllClick = () => {
        this.treeCmp.mask({
            xtype: 'loadmask',
            message: 'Expanding tree...'
        });

        this.toolbar.disable();

        this.treeCmp.expandAll(() => {
            this.treeCmp.unmask();
            this.toolbar.enable();
        });
    }

    onCollapseAllClick = () => {
        this.toolbar.disable();

        this.treeCmp.collapseAll(() => {
            this.toolbar.enable();
        });
    }
}
