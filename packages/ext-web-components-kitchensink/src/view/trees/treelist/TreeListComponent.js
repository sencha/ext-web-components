import './TreeListComponent.html';
import data from './data';

export default class TreeListComponent {
    constructor() {
        this.micro = false;
        this.ui='nav';
        this.nav=true;
    }

    onPanelReady = (event) => {
        this.panelCmp = event.detail.cmp;
        const isPhone = Ext.os.is.Phone;
        const top = !isPhone ? '10' : null;
        const left = !isPhone ? '10' : null;
        const width = !isPhone ? '400' : null;
        const height = !isPhone ? '600' : null;

        this.panelCmp.setTop(top);
        this.panelCmp.setLeft(left);
        this.panelCmp.setWidth(width);
        this.panelCmp.setHeight(height);
    }

    onTreeListReady = (event) => {
        this.treeCmp = event.detail.cmp;
        this.store = Ext.create('Ext.data.TreeStore', {
            rootVisible: true,
            root: data
        });
        this.treeCmp.setStore(this.store);
    }

    onButtonReady1 = (event) => {
        this.button1Cmp = event.detail.cmp;
        this.button1Cmp.setPressed(true);
    }

    onButtonReady2 = (event) => {
        this.button2Cmp = event.detail.cmp;
        this.button2Cmp.setPressed(false);
    }

     toggleNav = (event) => {
         if (this.treeCmp) {
             this.navCmp = event.detail.value;
             if (this.navCmp) {
                 this.treeCmp.setUi('nav');
                 this.treeCmp.setExpanderFirst(false);
             } else {
                 this.treeCmp.setUi(null);
                 this.treeCmp.setExpanderFirst(true);
             }
         }
         this.button2Cmp.setPressed(false);
     }

     toggleMicro = (event) => {
         this.microCmp = event.detail.value;
         if (this.microCmp) {
             this.treeCmp.setMicro(true);
             this.treeCmp.setExpanderFirst(false);
             this.treeCmp.setUi('nav');
             this.button1Cmp.setDisabled(true);
             this.button1Cmp.setPressed(false);
             this.button2Cmp.setPressed(true);
         } else {
             this.treeCmp.setMicro(false);
             this.treeCmp.setExpanderFirst(true);
             this.treeCmp.setUi('nav');
             this.button1Cmp.setDisabled(false);
             this.button1Cmp.setPressed(true);
             this.button2Cmp.setPressed(false);
         }
     }
}
